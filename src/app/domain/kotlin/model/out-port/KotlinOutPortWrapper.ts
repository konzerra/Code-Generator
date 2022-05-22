
import {Injectable} from "@angular/core";
import {KotlinInput} from "../../Input/KotlinInput";
import {KotlinOutPortDeleteById} from "./KotlinOutPortDeleteById";
import {KotlinOutPortFindAll} from "./KotlinOutPortFindAll";
import {KotlinOutPortFindById} from "./KotlinOutPortFindById";
import {KotlinOutPortSave} from "./KotlinOutPortSave";
import {KotlinOutPortUpdate} from "./KotlinOutPortUpdate";
import {KotlinOutPortEntityFromSaveDto} from "./KotlinOutPortEntityFromSaveDto";
import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";

@Injectable({
  providedIn:"root"
})
export class KotlinOutPortWrapper {
  constructor(
    public kotlinOutPortDeleteById:KotlinOutPortDeleteById,
    public kotlinOutPortFindAll:KotlinOutPortFindAll,
    public kotlinOutPortFindById:KotlinOutPortFindById,
    public kotlinOutPortSave:KotlinOutPortSave,
    public kotlinOutPortUpdate:KotlinOutPortUpdate,
    public kotlinOutPortEntityFromSaveDto:KotlinOutPortEntityFromSaveDto
  ) {
  }
  generateFiles(input: KotlinInput): Array<GeneratedFile> {
    let files = new Array<GeneratedFile>()
    files.push(this.kotlinOutPortDeleteById.generateFile(input))
    files.push(this.kotlinOutPortFindAll.generateFile(input))
    files.push(this.kotlinOutPortFindById.generateFile(input))
    files.push(this.kotlinOutPortSave.generateFile(input))
    files.push(this.kotlinOutPortUpdate.generateFile(input))
    files.push(this.kotlinOutPortEntityFromSaveDto.generateFile(input))
    return files;
  }

}
