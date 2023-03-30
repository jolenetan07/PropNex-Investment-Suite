// user model
export class fbUser {
    constructor(
      public email: string,
      public favourites: fbPostal[],
      public generalRec: fbPostal[],
      public name: string,
      public password: string,
      public personalRec: string[],
      public userType: string
    ) {}
  }


  // place model
  export class fbPostal {
    constructor(
      public name: string,
      public postal: string,
      public imageUrl?: string,
      public units?: fbUnit[]
    ) {}
  }


  // unit model
  export class fbUnit {
    constructor(
      public bedrooms: string,
      public floorplan: string,
      public size: string,
      public unitNumber: string,
    ) {}
  }


  // recommendation model
  export class fbRec {
    constructor(
      public place: string,
      public rec1: string,
      public rec2: string,
      public rec3: string,
    ) {}
  }

