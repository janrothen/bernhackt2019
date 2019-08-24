import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  public getCategories(): Category[] {
    return [
      {id: 1, label: "Nahrung", icon: 'utensils', solid: true, challenges: []},
      {id: 2, label: "Verkehr", icon: 'car', solid: true, challenges: []},
      {id: 3, label: "Wohnen", icon: 'home', solid: false, challenges: []},
      {id: 4, label: "Kleidung", icon: 'tshirt', solid: false, challenges: []}
    ] as Category[];
  }
}

// base class for Category and Challenge (so they can be displayed with same
// components, e.g. as button)
class Categorised {
  public id: number;
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
