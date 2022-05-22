
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinResourceNotFoundException extends FileGenerator<KotlinInput>{
  protected className: string = 'ResourceNotFoundException'
  protected path: string = 'Exception/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}.exception
    `
  }
  generateSourceCode(input:KotlinInput) {
    return `${this.generateImports(input)}

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(value = HttpStatus.NOT_FOUND)
class ResourceNotFoundException(
    val className:String,
    val fieldName:String,
    val fieldValue:Any
) : RuntimeException(
    "$className not found with $fieldName : '$fieldValue'"
) {

}
    `

  }

}
