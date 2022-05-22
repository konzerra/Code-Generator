
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenericFormGroup} from "../../../_generic/form-group/GenericFormGroup";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class KotlinFormGroup extends GenericFormGroup{
  modelName: FormControl =  new FormControl("", Validators.required);
  idType: FormControl = new FormControl("",Validators.required)
  basePackage: FormControl = new FormControl("")
  formGroup:FormGroup = new FormGroup({
    modelName: this.modelName,
    idType : this.idType
  })
}
