import {GenericFormGroup} from "../form-group/GenericFormGroup";
import {GenericInput} from "../model/GenericInput";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../util/genericCheckFormControl";
import {Generator} from "../generator/Generator";
import * as JSZip from "jszip";


export abstract class GenericGeneratorComponent<
  Input extends GenericInput,
  GeneratorEngine extends Generator<Input>,
  FormGroup extends GenericFormGroup,

  >{

  protected abstract generator:GeneratorEngine
  public abstract  formGroup:FormGroup

  /**
   *
   * @protected
   */
  protected abstract getInput():Input

  onSubmit():void{
    this.generateZip()
  }

  generateZip():void{
    const zip = new JSZip()
    const input:Input = this.getInput()
    const generatedFiles = this.generator.generate(input)
    generatedFiles.forEach((file)=>{
      zip.file(file.fileName,file.content)
    })
    zip.generateAsync({type : 'blob'}).then((content)=>{
      let a = document.createElement("a"),
        url = URL.createObjectURL(content);
      a.href = url;
      a.download = input.modelName+"Generated";
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    })
  }

  checkFormControl(modelName: FormControl):boolean {
    return genericCheckFormControl(modelName)
  }
}
