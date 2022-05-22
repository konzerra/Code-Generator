import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortFindById extends FileGenerator<KotlinInput>{
  protected className: string = 'InPortFindByIdImpl'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.crud.impl

import ${input.basePackage}.annotation.InPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain..${input.modelName.toLowerCase()}.dto.${input.modelName}ResponseDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.${input.modelName}ApiPath
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.UseCaseFindById
import konzerra_lab_kotlin_clean_architecture.generic.port.\`in\`.crud.abstract_impl.InPortFindByIdAbstractImpl

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable

@InPort
class ${input.modelName}InPortFindByIdImpl(
    override val useCaseFindById: UseCaseFindById<${input.modelName}, ${input.idType}, ${input.modelName}ResponseDto>
) : InPortFindByIdAbstractImpl<${input.modelName}, ${input.idType}, ${input.modelName}ResponseDto>() {

    @GetMapping(${input.modelName}ApiPath.findByIdPath)
    override fun findById(@PathVariable id: ${input.idType}): ResponseEntity<${input.modelName}ResponseDto> {
        return ResponseEntity(useCaseFindById.findById(id),HttpStatus.OK)
    }

}
    `
  }

}
