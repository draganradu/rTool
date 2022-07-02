import { ToolCodingClass } from "./enums";

// Database data types
export interface conventionsDB {
  id: string,  // This should be the actual id
  CallingName: string,
  FullName: string,
  Size: string,
  Weight: string,
}

export interface toolDb extends conventionsDB {
  ID: Number, // needs to be removed in favor of id
  IDClass: ToolCodingClass, // needs to be enumed
  Size: string, // size
  SubTools: string, // This should be an array of referances
}

export interface materialDb {

}