

import {KotlinInput} from "../../Input/KotlinInput";
import {Injectable} from "@angular/core";
import {FileGenerator} from "../../../../_generic/generator/FileGenerator";
import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";

@Injectable({
  providedIn:"root"
})
export class KotlinBaseApiPath extends FileGenerator<KotlinInput>{
  protected generateImports(input: KotlinInput): string {
    if(input.basePackage === '')
      return 'package com.YOUR_PACKAGE'
    else
      return `
package ${input.basePackage}
    `
  }
  protected className: string = 'BaseApiPath'
  protected path: string = ''
  generateSourceCode(input: KotlinInput): string {
    return `${this.generateImports(input)}

class ApiPath {
    companion object{
        private const val apiVersion:String = "api/v1"
        const val publicPath:String = "$apiVersion/public"
        const val protectedPath:String = "$apiVersion/protected"
    }
}
    `
  }

  override generateFile(input: KotlinInput): GeneratedFile {
    return {
      fileName: `${this.path + this.className + input.extension}`,
      content: new Blob([this.generateSourceCode(input)])
    }
  }




}
