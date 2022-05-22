

import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {KotlinInput} from "../../Input/KotlinInput";

@Injectable({
  providedIn:"root"
})
export class KotlinModelApiPath extends FileGenerator<KotlinInput>{
  protected className: string = 'ApiPath'
  protected path: string = 'InPort/'
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package  ${input.basePackage}.domain.${input.modelName.toLowerCase()}.port.\`in\`

import  ${input.basePackage}.ApiPath
    `
  }
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}


class ${input.modelName}ApiPath {
    companion object{
        private const val basePath = "/${input.modelName.toLowerCase()}"
        const val protectedPath = "\${ApiPath.protectedPath}$basePath"
        const val publicPath = "\${ApiPath.publicPath}/${input.modelName.toLowerCase()}"

        const val findByIdPath = "$publicPath/{id}"
        const val findAllPath = "$publicPath/all"

        const val savePath = protectedPath
        const val updatePath = protectedPath
        const val deleteByIdPath = "$protectedPath/{id}"
    }
}
    `
  }

}
