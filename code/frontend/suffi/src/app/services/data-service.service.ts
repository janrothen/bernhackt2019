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
