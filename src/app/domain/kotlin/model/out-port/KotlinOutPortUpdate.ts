import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortUpdate extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortUpdateImpl"
  protected path: string = "OutPort/"
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.out.crud.impl

import ${input.basePackage}.annotation.OutPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain..${input.modelName.toLowerCase()}.dto.${input.modelName}UpdateDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}Repository
    `
  }
  generateSourceCode(input:KotlinInput):string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortFindById
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortUpdate

@OutPort
class ${input.modelName}OutPortUpdateImpl(
    private val outPortFindById:OutPortFindById<${input.modelName},Long>,
    private val repository: ${input.modelName}Repository
) : OutPortUpdate<${input.modelName}UpdateDto> {
    override fun update(updateDto: ${input.modelName}UpdateDto) {
        val ${input.modelName.toLowerCase()} = outPortFindById.findById(updateDto.id)
        //${input.modelName.toLowerCase()}.field = updateDto.field

        repository.save(${input.modelName.toLowerCase()})
    }
}
  `
  }

}
