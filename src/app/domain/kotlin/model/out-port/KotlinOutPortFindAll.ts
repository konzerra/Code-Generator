import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortFindAll extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortFindAllImpl"
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
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortFindAll

@OutPort
class ${input.modelName}OutPortFindAllImpl(
    private val repository: ${input.modelName}Repository
):OutPortFindAll<${input.modelName}> {
    override fun findAll(): List<${input.modelName}> {
        return repository.findAll()
    }

}
  `
  }

}
