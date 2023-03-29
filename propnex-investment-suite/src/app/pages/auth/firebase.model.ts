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

  export class fbPostal {
    constructor(
      public name: string,
      public postal: string,
      public imageUrl?: string,
      public units?: fbUnit[]
    ) {}
  }

  export class fbUnit {
    constructor(
      public bedrooms: string,
      public floorplan: string,
      public size: string,
      public unitNumber: string,
    ) {}
  }

  export class fbRec {
    constructor(
      public place: string,
      public rec1: string,
      public rec2: string,
      public rec3: string,
    ) {}
  }

  export class fbTrans {
    constructor(
      public area: string,
      public dateOfSale: string,
      public flatModel: string,
      public floorMax: string,
      public floorMin: string,
      public privatePublic: string,
      public projectName: string,
      public remainingLease: string,
      public salePrice: string,
      public type: string,
      public transID: string,
    ) {}
  }