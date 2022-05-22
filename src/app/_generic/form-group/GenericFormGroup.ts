import {FormControl, FormGroup} from "@angular/forms";


export abstract class GenericFormGroup
{
  abstract modelName:FormControl
  abstract formGroup:FormGroup
}
