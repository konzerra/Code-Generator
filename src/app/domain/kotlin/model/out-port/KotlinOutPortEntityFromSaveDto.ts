import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";
import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortEntityFromSaveDto extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortFromSaveDtoImpl"
  protected path: string = "OutPort/"
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.out.crud.impl

import ${input.basePackage}.annotation.OutPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}SaveDto
    `
  }

  generateSourceCode(input:KotlinInput):string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortEntityFromSaveDto

@OutPort
class ${input.modelName}OutPortFromSaveDtoImpl: OutPortEntityFromSaveDto<${input.modelName}, ${input.modelName}SaveDto> {
    override fun entityFromSaveDto(saveDto: ${input.modelName}SaveDto): ${input.modelName} {
        return ${input.modelName}(
            //model.field = saveDto.field
            //name = saveDto.name,
        )
    }
}
  `//End of Template
  }

}
