export class fbUser {
    constructor(
      public email: string,
      public firstName: string,
      public householdIncome: number,
      public lastName: string,
      public password: string,
      public type: string,
      public username: string
    ) {}
  }

  export class fbPostal {
    constructor(
      public name: string,
      public postal: string,
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