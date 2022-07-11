import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortSave extends FileGenerator<KotlinInput>{
  protected className: string = 'InPortSaveImpl'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.crud.impl

import ${input.basePackage}.annotation.InPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto.${input.modelName}SaveDto
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.${input.modelName}ApiPath
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.\`in\`.crud.abstract_impl.InPortSaveAbstractImpl
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.UseCaseSave

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

@InPort
class ${input.modelName}InPortSaveImpl(
    override val useCaseInPortSave: UseCaseSave<${input.modelName}SaveDto>
) : InPortSaveAbstractImpl<${input.modelName}, ${input.idType}, ${input.modelName}SaveDto>() {

    @PostMapping(${input.modelName}ApiPath.savePath)
    override fun save(@RequestBody saveDto: ${input.modelName}SaveDto): ResponseEntity<*> {
        useCaseInPortSave.save(saveDto)
        return ResponseEntity<Any>(HttpStatus.CREATED)
    }
}
    `
  }

}
