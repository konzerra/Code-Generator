import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";
import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortDeleteById extends FileGenerator<KotlinInput>{
  protected className: string = "OutPortDeleteByIdImpl"
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
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortDeleteById

@OutPort
class ${input.modelName}OutPortDeleteByIdImpl(
private val repository: ${input.modelName}Repository
) :OutPortDeleteById<${input.modelName},${input.idType}>{
  override fun deleteById(id: ${input.idType}) {
      repository.deleteById(id)
  }
}
  `
  }

}
