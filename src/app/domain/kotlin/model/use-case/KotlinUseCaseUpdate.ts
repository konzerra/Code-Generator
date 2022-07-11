
import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinUseCaseUpdate extends FileGenerator<KotlinInput>{
  protected className: string = 'UseCaseUpdateImpl'
  protected path: string = 'UseCase/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.usecase.crud.impl

import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}UpdateDto
import ${input.basePackage}.annotation.UseCase
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortUpdate
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.abstract_impl.UseCaseUpdateAbstractImpl

@UseCase
class ${input.modelName}UseCaseUpdateImpl(
    override val outPortUpdate: OutPortUpdate<${input.modelName}UpdateDto>
) : UseCaseUpdateAbstractImpl<${input.modelName}UpdateDto>(){
}
    `
  }




}
