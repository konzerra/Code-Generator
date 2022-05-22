import {GenericInput} from "../model/GenericInput";
import {GeneratedFile} from "../model/GeneratedFile";

export abstract class Generator<Input extends GenericInput>{
  abstract generate(input:Input):Array<GeneratedFile>
}
