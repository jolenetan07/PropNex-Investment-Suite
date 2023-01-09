import { Injectable } from '@angular/core';
import { Unit } from '../units/units.model';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _allPlaces: Place[];
  //private _recPlaces: Place[];

  private _favPlaces: Place[] = [
    new Place(
      'p4',
      '142 Bedok Reservoir Rd',
      '470142',
      'https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/09/Jewel_Changi_airport.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
      [
        new Unit(
          'u1',
          '03-01',
          '142 Bedok Reservoir Rd',
          134,
          '2018-04',
          '',
          5,
          1,
          'Public',
          'Freehold',
          1700000,
          'HDB'
          ),
    
        new Unit(
          'u2',
          '03-02',
          '142 Bedok Reservoir Rd',
          134,
          '2018-04',
          '',
          5,
          1,
          'Public',
          'Freehold',
          1700000,
          'HDB'
          ),
    
          new Unit(
            'u3',
            '03-01',
            '142 Bedok Reservoir Rd',
            134,
            '2018-04',
            '',
            5,
            1,
            'Public',
            'Freehold',
            1700000,
            'HDB'
            ),
        ]
      ),

    new Place(
      'p5',
      '142 Jln Bt Merah',
      '160142',
      'https://www.toureiffel.paris/sites/default/files/styles/narrow_x1_850/public/actualite/image_principale/IMG_0815.jpg?itok=QzrNLD7D',
      ),

    new Place(
      'p6',
      '232 Bain St',
      '180232',
      'https://static.mothership.sg/1/2020/06/104659315_297364411670557_7937773298198010266_o.jpg',
      )
  ]

  private _personalRecPlaces: Place[] = [
    new Place(
      'p1',
      '412 Woodlands St 41',
      '730412',
      'https://hybecorp.com/archive/YyQ6AuOnVuWtyBcnSPWW7UCNE7iZNNEDk9x8r01Eo0kOAWgMvS2hExwGhRFHZByiAtdJdOJS8NM4CjIXlkNHx016KMlDqmKfTJ8R8Tf7W8PuRxisViOGRFszt7ELmq9u.jpg',
      ),
  ]

  private _trendRecPlaces: Place[] = [
    new Place(
      'p2',
      '424B Yishun Ave 11',
      '762424',
      'https://cdn.shopify.com/s/files/1/0231/1294/1648/articles/Pokemon_Center1_700x.jpg?v=1630683901',
      ),

    new Place(
      'p3',
      '601 Ang Mo Kio Ave 5',
      '560601',
      'https://phantom-marca.unidadeditorial.es/405632f5ad74b20e7db78c1401cc4afa/crop/119x0/1848x1154/resize/660/f/webp/assets/multimedia/imagenes/2022/11/14/16684588334944.png',
      ),
  ]

  constructor() { }

  get favPlaces() {
    return [...this._favPlaces];
  }

  get personalRecPlaces() {
    return [...this._personalRecPlaces];
  }

  get trendRecPlaces() {
    return [...this._trendRecPlaces];
  }

  get recPlaces() {
    return [...this._personalRecPlaces.concat(...this._trendRecPlaces)];
  }

  get allPlaces() {
    return this._allPlaces = [...this._favPlaces.concat(...this._personalRecPlaces, ...this._trendRecPlaces)];
  }

  searchPlace(postal: string) {
    let targetPlace: Place;
    targetPlace = this._allPlaces.find(p => p.postal === postal);
    //console.log(targetPlace);
    return targetPlace;
  } 

  // getPlace(id: string) {
  //   return {...this._allPlaces.find(p => p.id === id)};
  // }

  removeFavPlace(postal: string) {
    let updatePlaces: Place[];
    updatePlaces = this._favPlaces.filter(
      place => place.postal !== postal
    );
    return updatePlaces;
  }

  addFavPlace(postal: string) {
    let targetPlace: Place[];
    targetPlace = this.recPlaces.filter(
      place => place.postal === postal
    );
    return this._favPlaces = this._favPlaces.concat(targetPlace);
  }

  getBlockUnits(postal: string = '470142') {
    let blockUnits: Unit[];
    let targetPlace: Place;
    targetPlace = this._allPlaces.find(p => p.postal === postal);
    blockUnits = targetPlace.units;
    //console.log(blockUnits);
    return blockUnits;
  }

  searchUnit(postal: string = '470142', unitNo: string) {
    let blockUnits: Unit[];
    let targetUnit: Unit;
    blockUnits = this.getBlockUnits(postal);
    targetUnit = blockUnits.find(p => p.unitNum === unitNo);
    //console.log(targetUnit);
    return targetUnit;
  } 

  

}
