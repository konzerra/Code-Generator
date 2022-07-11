
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortUpdate extends FileGenerator<KotlinInput>{
  protected className: string = 'InPortUpdateImpl'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.crud.impl

import ${input.basePackage}.annotation.InPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}UpdateDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.${input.modelName}ApiPath
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.\`in\`.crud.abstract_impl.InPortUpdateAbstractImpl
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.UseCaseUpdate

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PutMapping

@InPort
class ${input.modelName}InPortUpdateImpl(
    override val useCaseUpdate: UseCaseUpdate<${input.modelName}UpdateDto>
) : InPortUpdateAbstractImpl<${input.modelName}, ${input.idType}, ${input.modelName}UpdateDto>() {

    @PutMapping(${input.modelName}ApiPath.updatePath)
    override fun update(updateDto: ${input.modelName}UpdateDto): ResponseEntity<*> {
        useCaseUpdate.update(updateDto)
        return ResponseEntity<Any>(HttpStatus.OK)
    }
}
    `
  }

}
