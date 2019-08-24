import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  public getCategories(): Category[] {
    return {

    } as Category[];
  }
}

// base class for Category and Challenge (so they can be displayed with same
// components, e.g. as button)
class Categorised {
  public icon: any;
  public label: string;
  public help: number = 0;
  public solid: boolean = false;
}

// Category: provides multiple challenges
export class Category extends Categorised {
  public challenges: number[];
}

// Challenge: provides different options
export class Challenge extends Categorised {
  public info: string;
  public question: string;
  public options: string[];
  public impacts: number[];
}
