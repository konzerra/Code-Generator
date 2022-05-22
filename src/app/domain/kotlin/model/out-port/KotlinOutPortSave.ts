import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortSave extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortSaveImpl"
  protected path: string = "OutPort/"
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.out.crud.impl

import ${input.basePackage}.annotation.OutPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain..${input.modelName.toLowerCase()}.dto.${input.modelName}SaveDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}Repository
    `
  }
  generateSourceCode(input:KotlinInput):string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortEntityFromSaveDto
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortSave

@OutPort
class ${input.modelName}OutPortSaveImpl(
    private val repository: ${input.modelName}Repository,
    private val outPortEntityFromSaveDto: OutPortEntityFromSaveDto<${input.modelName},${input.modelName}SaveDto>
):OutPortSave<${input.modelName}SaveDto> {
    override fun save(saveDto: ${input.modelName}SaveDto) {
        repository.save(outPortEntityFromSaveDto.entityFromSaveDto(saveDto))
    }

}
  `
  }

}
