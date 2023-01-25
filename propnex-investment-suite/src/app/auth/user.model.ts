import { Unit } from "../units/units.model";

export class User {
    constructor(
      public id: string,
      public username: string,
      public password: string,
      public firstname: string,
      public lastname: string,
      public income: number,
      public type: string,
      public units?: Unit[]
    ) {}
  }
