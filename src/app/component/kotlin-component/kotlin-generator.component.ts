import {Component, OnInit} from '@angular/core';
import {KotlinFormGroup} from "../../domain/kotlin/form-group/KotlinFormGroup";
import {KotlinGenerator} from "../../domain/kotlin/KotlinGenerator";
import {GenericGeneratorComponent} from "../../_generic/component/GenericGeneratorComponent";
import {KotlinInput} from "../../domain/kotlin/Input/KotlinInput";


@Component({
  selector: 'app-generator',
  templateUrl: './kotlin-generator.component.html',
  styleUrls: ['./kotlin-generator.component.css']
})
export class KotlinGeneratorComponent
  extends GenericGeneratorComponent<KotlinInput,KotlinGenerator, KotlinFormGroup>
  implements OnInit

{
  constructor(
    public override formGroup: KotlinFormGroup,
    protected override generator: KotlinGenerator
) {
    super();
  }
  ngOnInit(): void {
  }



  protected getInput(): KotlinInput {
    return {
      modelName: this.formGroup.modelName.value,
      idType: this.formGroup.idType.value,
      extension: ".kt",
      basePackage: this.formGroup.basePackage.value
    };
  }


}
