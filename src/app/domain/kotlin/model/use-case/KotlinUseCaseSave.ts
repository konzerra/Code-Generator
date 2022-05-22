

import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";

@Injectable({
  providedIn:"root"
})
export class KotlinUseCaseSave extends FileGenerator<KotlinInput>{
  protected className: string = 'UseCaseSaveImpl'
  protected path: string = 'UseCase/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.usecase.crud.impl

import ${input.basePackage}.annotation.UseCase
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}

    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}

import konzerra_lab_kotlin_clean_architecture.generic.port.out.crud.OutPortSave
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.abstract_impl.UseCaseSaveAbstractImpl

@UseCase
class ${input.modelName}UseCaseSaveImpl(
    override val outPortSave: OutPortSave<${input.modelName}SaveDto>
) : UseCaseSaveAbstractImpl<${input.modelName}SaveDto>(){

}
    `
  }




}
