
import {Injectable} from "@angular/core";
import {KotlinInput} from "../../Input/KotlinInput";
import {GeneratedFile} from "../../../../_generic/model/GeneratedFile";
import {KotlinInPortDeleteById} from "./KotlinInPortDeleteById";
import {KotlinInPortFindAll} from "./KotlinInPortFindAll";
import {KotlinInPortFindById} from "./KotlinInPortFindById";
import {KotlinInPortSave} from "./KotlinInPortSave";
import {KotlinInPortUpdate} from "./KotlinInPortUpdate";

@Injectable({
  providedIn:"root"
})
export class KotlinInPortWrapper {
  constructor(
    public kotlinInPortDeleteById:KotlinInPortDeleteById,
    public kotlinInPortFindAll:KotlinInPortFindAll,
    public kotlinInPortFindById:KotlinInPortFindById,
    public kotlinInPortSave:KotlinInPortSave,
    public kotlinInPortUpdate:KotlinInPortUpdate,
  ) {
  }
  generateFiles(input: KotlinInput): Array<GeneratedFile> {
    let files = new Array<GeneratedFile>()
    files.push(this.kotlinInPortDeleteById.generateFile(input))
    files.push(this.kotlinInPortFindAll.generateFile(input))
    files.push(this.kotlinInPortFindById.generateFile(input))
    files.push(this.kotlinInPortSave.generateFile(input))
    files.push(this.kotlinInPortUpdate.generateFile(input))

    return files;
  }

}
