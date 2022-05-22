
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinModelUpdateDto extends FileGenerator<KotlinInput>{
  protected className: string = 'UpdateDto'
  protected path: string = 'Dto/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package  ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}

import konzerra_lab_kotlin_clean_architecture.generic.data.UpdateDtoI

class ${input.modelName}UpdateDto(
    var id: ${input.idType},

) : UpdateDtoI
    `
  }

}
