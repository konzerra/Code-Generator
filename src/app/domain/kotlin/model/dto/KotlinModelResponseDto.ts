
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinModelResponseDto extends FileGenerator<KotlinInput>{
  protected className: string = 'ResponseDto'
  protected path: string = 'Dto/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package  ${input.basePackage}.domain.${input.modelName.toLowerCase()}.dto

import  ${input.basePackage}.annotation.ResponseDto
import  ${input.basePackage}.domain.${input.modelName.toLowerCase()}.${input.modelName}
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}

import konzerra_lab_kotlin_clean_architecture.generic.data.ResponseDtoI
import konzerra_lab_kotlin_clean_architecture.generic.util.Mapper


@ResponseDto
class ${input.modelName}ResponseDto : ResponseDtoI, Mapper<${input.modelName}, ${input.modelName}ResponseDto>
{
    //class fields
    //var id:${input.idType}? = null
    //lateinit var name:String
    override fun toResponseDto(entity: ${input.modelName}): ${input.modelName}ResponseDto {
        val responseDto = ${input.modelName}ResponseDto()
        //initalize class fields
        //responseDto.id = entity.id
        //responseDto.name = entity.name
        return responseDto
    }
}
    `
  }

}
