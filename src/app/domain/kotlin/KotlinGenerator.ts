import {Generator} from "../../_generic/generator/Generator";
import {GeneratedFile} from "../../_generic/model/GeneratedFile";
import {Injectable} from "@angular/core";

import {KotlinInput} from "./Input/KotlinInput";
import {KotlinOutPortWrapper} from "./model/out-port/KotlinOutPortWrapper";
import {KotlinInPortWrapper} from "./model/in-port/KotlinInPortWrapper";
import {KotlinBaseApiPath} from "./model/api-path/KotlinBaseApiPath";
import {KotlinModelApiPath} from "./model/api-path/KotlinModelApiPath";
import {KotlinResourceNotFoundException} from "./model/exception/KotlinResourceNotFoundException";
import {KotlinUseCaseWrapper} from "./model/use-case/KotlinUseCaseWrapper";
import {KotlinModelDtoWrapper} from "./model/dto/KotlinModelDtoWrapper";

@Injectable({
  providedIn:"root"
})
export class KotlinGenerator extends Generator<KotlinInput>{
  constructor(
    private kotlinOutPortWrapper:KotlinOutPortWrapper,
    private kotlinInPortWrapper:KotlinInPortWrapper,
    private kotlinUseCaseWrapper:KotlinUseCaseWrapper,
    private kotlinModelDtoWrapper:KotlinModelDtoWrapper,

    private kotlinBaseApiPath:KotlinBaseApiPath,
    private kotlinModelApiPath:KotlinModelApiPath,
    private kotlinResourceNotFoundException:KotlinResourceNotFoundException
  ) {
    super();
  }

  generate(input: KotlinInput): Array<GeneratedFile> {
    let files:Array<GeneratedFile> = new Array<GeneratedFile>()
    files = files.concat(this.kotlinOutPortWrapper.generateFiles(input))
    files = files.concat(this.kotlinInPortWrapper.generateFiles(input))
    files = files.concat(this.kotlinUseCaseWrapper.generateFiles(input))
    files = files.concat(this.kotlinModelDtoWrapper.generateFiles(input))
    files.push(this.kotlinModelApiPath.generateFile(input))
    files.push(this.kotlinBaseApiPath.generateFile(input))
    files.push(this.kotlinResourceNotFoundException.generateFile(input))
    return files
  }


}
