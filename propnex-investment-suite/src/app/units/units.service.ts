import { Injectable } from '@angular/core';
import { Unit } from './units.model';

@Injectable({
  providedIn: 'root'
})

export class UnitsService {
  private _allUnits: Unit[] = [
    new Unit(
      'u1',
      '142 Bedok Reservoir Rd',
      '470142',
      '03-01',
      'HDB',
      '3 Room',
      '68'
      ),

      new Unit(
        'u2',
        '142 Bedok Reservoir Rd',
        '470142',
        '03-02',
        'HDB',
        '4 Room',
        '93'
      ),

      new Unit(
        'u3',
        '142 Bedok Reservoir Rd',
        '470142',
        '03-03',
        'HDB',
        '5 Room',
        '131'
        ),
  ]
  
  constructor() { }

  get allUnits() {
    return this._allUnits = [...this._allUnits];
  }

  searchUnit(unitNo: string) {
    let result: Unit[];
    result = this._allUnits.filter(
      unit => unit.unitNum === unitNo
    );
    if (result.length === 1) {
      console.log(result);
      return result[0];
    } 
    console.log(result);
    return result;
  } 
}
