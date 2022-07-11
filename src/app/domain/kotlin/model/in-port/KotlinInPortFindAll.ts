import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortFindAll extends FileGenerator<KotlinInput>{
  protected className: string = 'InPortFindAllImpl'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.crud.impl

import ${input.basePackage}.annotation.InPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}ResponseDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.${input.modelName}ApiPath
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.\`in\`.crud.abstract_impl.InPortFindAllAbstractImpl
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.UseCaseFindAll
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping

@InPort
class ${input.modelName}InPortFindAllImpl(
    override val useCaseFindAll: UseCaseFindAll<${input.modelName}, ${input.modelName}ResponseDto>
) : InPortFindAllAbstractImpl<${input.modelName}, ${input.modelName}ResponseDto>() {

    @GetMapping(${input.modelName}ApiPath.findAllPath)
    override fun findAll(): ResponseEntity<List<${input.modelName}ResponseDto>> {
        return ResponseEntity(useCaseFindAll.findAll(),HttpStatus.OK)
    }
}
    `
  }

}
