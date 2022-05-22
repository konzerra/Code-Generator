import {GenericInput} from "../model/GenericInput";
import {GeneratedFile} from "../model/GeneratedFile";

export abstract class FileGenerator<Input extends GenericInput>{
  protected abstract path:string
  protected abstract className:string

  abstract generateSourceCode(input:Input):string

  protected abstract generateImports(input:Input):string

  generateFile(input:Input):GeneratedFile{
    return {
      fileName: `${this.path + input.modelName + this.className + input.extension}`,
      content: new Blob([this.generateSourceCode(input)])
    }
  }
}
