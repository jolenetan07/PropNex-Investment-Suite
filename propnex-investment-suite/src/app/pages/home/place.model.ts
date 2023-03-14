import { Unit } from "../units/units.model";

export class Place {
  constructor(
    public id: string,
    public name: string, // address
    public postal: string,
    public imageUrl: string,
    public units?: Unit[]
  ) {}
}


  