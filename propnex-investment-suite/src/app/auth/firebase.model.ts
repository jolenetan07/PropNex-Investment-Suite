export class fbUser {
    constructor(
      public email: string,
      public favourites: fbPostal[],
      public generalRec: fbPostal[],
      public name: string,
      public password: string,
      public personalRec: fbPostal[],
      public userType: string
    ) {}
  }

  export class fbPostal {
    constructor(
      public name: string,
      public postal: string,
      public imageUrl: string
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