export class User {
    constructor(
      public id: string,
      public username: string,
      public password: string,
      public firstname: string,
      public lastname: string,
      public income: number
    ) {}
  }
  
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