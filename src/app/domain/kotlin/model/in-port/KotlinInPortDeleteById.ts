import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortDeleteById extends FileGenerator<KotlinInput>{
  protected className: string = 'InPortDeleteByIdImpl'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.crud.impl

import ${input.basePackage}.annotation.InPort
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
import ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`.${input.modelName}ApiPath
    `
  }
  generateSourceCode(input:KotlinInput) {
    return `${this.generateImports(input)}
import konzerra_lab_kotlin_clean_architecture.generic.port.\`in\`.crud.abstract_impl.InPortDeleteByIdAbstractImpl
import konzerra_lab_kotlin_clean_architecture.generic.usecase.crud.UseCaseDeleteById

import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

@InPort
class  ${input?.modelName}InPortDeleteByIdImpl(
    override val useCaseDeleteById: UseCaseDeleteById<${input?.modelName}, ${input?.idType}>
) : InPortDeleteByIdAbstractImpl<${input?.modelName}, ${input?.idType}>()
{
    @DeleteMapping(${input?.modelName}ApiPath.deleteByIdPath)
    override fun deleteById(@PathVariable id: ${input?.idType}): ResponseEntity<*> {
        useCaseDeleteById.deleteById(id)
        return ResponseEntity<Any>(HttpStatus.OK)
    }
}
    `

  }

}
