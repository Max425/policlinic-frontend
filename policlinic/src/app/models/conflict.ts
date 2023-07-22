import {IVisitor} from "./visitor";

export interface IConflict {
  id: number
  conflictPerson: IVisitor
  message: string
}
