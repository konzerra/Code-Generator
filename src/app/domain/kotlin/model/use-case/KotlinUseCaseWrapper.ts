
import {Injectable} from "@angular/core";
import {KotlinInput} from "../../Input/KotlinInput";
import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";

import {KotlinUseCaseFindAll} from "./KotlinUseCaseFindAll";
import {KotlinUseCaseDeleteById} from "./KotlinUseCaseDeleteById";
import {KotlinUseCaseFindById} from "./KotlinUseCaseFindById";
import {KotlinUseCaseSave} from "./KotlinUseCaseSave";
import {KotlinUseCaseUpdate} from "./KotlinUseCaseUpdate";

@Injectable({
  providedIn:"root"
})
export class KotlinUseCaseWrapper {
  constructor(
    public kotlinUseCaseDeleteById:KotlinUseCaseDeleteById,
    public kotlinUseCaseFindAll:KotlinUseCaseFindAll,
    public kotlinUseCaseFindById:KotlinUseCaseFindById,
    public kotlinUseCaseSave:KotlinUseCaseSave,
    public kotlinUseCaseUpdate:KotlinUseCaseUpdate,
  ) {
  }
  generateFiles(input: KotlinInput): Array<GeneratedFile> {
    let files = new Array<GeneratedFile>()
    files.push(this.kotlinUseCaseDeleteById.generateFile(input))
    files.push(this.kotlinUseCaseFindAll.generateFile(input))
    files.push(this.kotlinUseCaseFindById.generateFile(input))
    files.push(this.kotlinUseCaseSave.generateFile(input))
    files.push(this.kotlinUseCaseUpdate.generateFile(input))
    return files;
  }

}
