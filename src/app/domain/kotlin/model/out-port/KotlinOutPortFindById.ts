import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortFindById extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortFindByIdImpl"
  protected path: string = "OutPort/"
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.out.crud.impl

import ${input.basePackage}.annotation.OutPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}Repository
    `
  }
  generateSourceCode(input:KotlinInput):string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortFindById

@OutPort
class ${input.modelName}OutPortFindByIdImpl(
    private val repository: ${input.modelName}Repository
):OutPortFindById<${input.modelName},${input.idType}> {
    override fun findById(id: ${input.idType}): ${input.modelName} {
        return repository.findById(id).orElseThrow {
            ResourceNotFoundException(
                className = ${input.modelName}::class.simpleName ?: "className",
                fieldName = ${input.modelName}::id.name,
                fieldValue = id
            )
        }


    }
}
  `
  }

}
