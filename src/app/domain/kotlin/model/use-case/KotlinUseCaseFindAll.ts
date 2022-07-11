
import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinUseCaseFindAll extends FileGenerator<KotlinInput>{
  protected className: string = 'UseCaseFindAllImpl'
  protected path: string = 'UseCase/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.usecase.crud.impl

import ${input.basePackage}.annotation.UseCase
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}ResponseDto
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortFindAll
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.abstract_impl.UseCaseFindAllAbstractImpl
import konzerra_lab_kotlin_clean_architecture.generic.util.Mapper

@UseCase
class ${input.modelName}UseCaseFindAllImpl(
    override val outPortFindAll: OutPortFindAll<${input.modelName}>,
    override val mapper: Mapper<${input.modelName}, ${input.modelName}ResponseDto>
) : UseCaseFindAllAbstractImpl<${input.modelName}, ${input.modelName}ResponseDto>()
    `
  }




}
