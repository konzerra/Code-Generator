
import {Injectable} from "@angular/core";
import {KotlinInput} from "../../Input/KotlinInput";
import {GeneratedFile} from "../../../../_generic/model/GeneratedFile"
import {KotlinModelResponseDto} from "./KotlinModelResponseDto";
import {KotlinModelSaveDto} from "./KotlinModelSaveDto";
import {KotlinModelUpdateDto} from "./KotlinModelUpdateDto";

@Injectable({
  providedIn:"root"
})
export class KotlinModelDtoWrapper {
  constructor(
    public kotlinModelResponseDto:KotlinModelResponseDto,
    public kotlinModelSaveDto:KotlinModelSaveDto,
    public kotlinModelUpdateDto:KotlinModelUpdateDto,

  ) {
  }
  generateFiles(input: KotlinInput): Array<GeneratedFile> {
    let files = new Array<GeneratedFile>()
    files.push(this.kotlinModelResponseDto.generateFile(input))
    files.push(this.kotlinModelSaveDto.generateFile(input))
    files.push(this.kotlinModelUpdateDto.generateFile(input))
    return files;
  }

}
