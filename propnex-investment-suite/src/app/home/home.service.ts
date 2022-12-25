import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private targetPlace: Place;
  private _allPlaces: Place[];

  private _favPlaces: Place[] = [
    new Place(
      'p4',
      '142 Bedok Reservoir Rd',
      '470142',
      'https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/09/Jewel_Changi_airport.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
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

  private _recPlaces: Place[] = [
    new Place(
      'p1',
      '412 Woodlands St 41',
      '730412',
      'https://hybecorp.com/archive/YyQ6AuOnVuWtyBcnSPWW7UCNE7iZNNEDk9x8r01Eo0kOAWgMvS2hExwGhRFHZByiAtdJdOJS8NM4CjIXlkNHx016KMlDqmKfTJ8R8Tf7W8PuRxisViOGRFszt7ELmq9u.jpg',
      ),

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

  get recPlaces() {
    return [...this._recPlaces];
  }

  get allPlaces() {
    return this._allPlaces = [...this._favPlaces.concat(...this._recPlaces)];
  }

  // searchPlace(postal: string) {
  //   let result;
  //   result = this._allPlaces.filter(
  //     place => place.postal === postal
  //   );
  //   console.log(result);
  //   console.log(result.postal);
  //   console.log(result.name);
  //   return result;
  // } 
}
