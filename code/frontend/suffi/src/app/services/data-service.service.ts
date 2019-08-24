import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  restItems: any;
  restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRestItems();
    console.log(this.restItems);
  }
  
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

  public getCategories(): Category[] {
    return [
      {id: 1, label: "Nahrung", icon: 'utensils', help: 1, solid: true, isCategory: true},
      {id: 2, label: "Verkehr", icon: 'car', help: 2, solid: true, isCategory: true},
      {id: 3, label: "Wohnen", icon: 'home', help: 3, solid: false, isCategory: true},
      {id: 4, label: "Kleidung", icon: 'tshirt', help: 4, solid: false, isCategory: true}
    ] as Category[];
  }

  public getChallenges(categoryid: number): Challenge[] {
    let challenges: Challenge[] = [
      {id: 1, label: "Regional", icon: 'utensils', help: 0, solid: true, category: 1, info: 'kaufe regional', question: 'wie oft kaufst du regional', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
      {id: 2, label: "Saisonal", icon: 'utensils', help: 0, solid: true, category: 1, info: 'kaufe saisonal', question: 'wie oft kaufst du saisonal', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
      {id: 3, label: "Vegan", icon: 'utensils', help: 0, solid: false, category: 1, info: 'lebe vegan', question: 'wie oft verzichtest du auf fleisch', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
      {id: 4, label: "ÖV", icon: 'car', help: 0, solid: true, category: 2, info: 'öv', question: 'du öv?', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
      {id: 5, label: "Ferien", icon: 'car', help: 0, solid: true, category: 2, info: 'ferien', question: 'urlaub?', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]}
    ]
    return challenges.filter((challenge) => {
      return challenge.category == categoryid;
    });
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
  public isCategory: boolean = true;
}

// Challenge: provides different options
export class Challenge extends Categorised {
  public category: number;
  public info: string;
  public question: string;
  public options: string[];
  public impacts: number[];
}
