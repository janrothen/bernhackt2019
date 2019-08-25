import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private categoriesUrl = environment.endpoint + 'category';
  private activechallengesUrl = environment.endpoint + 'activeChallenge/';
  private categories: Category[] = undefined;
  // private challengesObservable = new Observable<any>();
  private activechallenges: ActiveChallenge[] = undefined;
  private challenges: Challenge[] = undefined;
  private options: Option[] = undefined;

  constructor(private http: HttpClient) { }

  // return an Observable that once finished delivers all categories including
  // their challenges including challenge's options -- heck, the whole tree
  getCategoriesFromBackend(): Observable<any> {
    return this.http
      .get<any[]>(this.categoriesUrl)
      .pipe(map(data => this.mapData(data)));
  }

  // private getActiveChallengesFromBackend(): Observable<any> {
  //   return this.http
  //     .get<any[]>(this.activechallengesUrl)
  //     .pipe((data) => {
  //       return data as ActiveChallenge[];
  //     });
  // }

  // maps data received from backend to local models
  mapData(data : any) {
    var categories : Category[] = [];
    if (!data || !data.results || data.results.length == 0) {
      return categories
    }

    data.results.forEach((item) => {
      var category = new Category();
      category.id = item.id;
      category.label = item.label;
      category.help = item.help;
      category.icon = item.icon;
      category.challenges = item.challenges;
      category.solid = true;
      category.isCategory = true;

      categories.push(category);
      }
    );

    return categories;
    // return this.getCategories();
  }

  private mapActiveChallenges(data: any): ActiveChallenge[] {
    this.activechallenges = [];
    if (!data || !data.results || data.results.length == 0) {
      return this.activechallenges;
    }
    // map data and transform references(id) to actual object references
    this.activechallenges = data.results as ActiveChallenge[];
    this.resolveActiveChallenges();
    console.log('****')
    console.log(this.activechallenges);
    return this.activechallenges;
    // data.results.forEach((item, index) => {
    //   activechallenges.push(item as ActiveChallenge);
    // });
  }

  // resolves numeric references to object references
  private resolveActiveChallenges() {

    this.getCategories().subscribe((categories) => {
      // reolve options
      console.log('calling resolveActiveChallenges()');
      for (let index in this.activechallenges) {
        if (typeof this.activechallenges[index].challenge === 'number') {
          let id: number = +this.activechallenges[index].challenge;
          this.activechallenges[index].challenge = this.getChallengeById(id);
        }
        if (typeof this.activechallenges[index].valueStart === 'number') {
          let id: number = +this.activechallenges[index].valueStart;
          this.activechallenges[index].valueStart = this.getOptionById(id);
        }
        if (typeof this.activechallenges[index].valueGoal === 'number') {
          let id: number = +this.activechallenges[index].valueGoal;
          this.activechallenges[index].valueGoal = this.getOptionById(id);
        }
      }
    });
  }

  public getChallengeById(id: number): Challenge {
    for (let chl of this.challenges) {
      if (chl.id == id) {
        return chl;
      }
    }
    return null;
  }

  public getOptionById(id: number): Option {
    console.log('calling getOptionById()');
    for (let opt of this.options) {
      if (opt.id == id) {
        console.log('found option');
        return opt;
      }
    }
    return null;
  }

  // get categories from cache or remote if: not cached or forced reload
  public getCategories(forcedReload: boolean = false): Observable<any> {
    console.log('called getCategories');
    // load from remote
    if (forcedReload || this.categories == undefined) {
      console.log('... loading from remote');
      let obs = this.http.get<any[]>(this.categoriesUrl)
        .pipe(map(data => this.mapData(data)));
      // fill cache
      obs.subscribe((categories) => {
        this.categories = categories;
        this.challenges = [];
        this.options = [];
        for (let cat of this.categories) {
          this.challenges = this.challenges.concat(cat.challenges);
          for (let chl of cat.challenges) {
            this.options = this.options.concat(chl.options);
          }
        }
      })
      return obs;
    // load from cache
    } else {
      console.log('... using cached');
      return new Observable((obs) => {
        obs.next(this.categories);
        obs.complete();
      })
    }
  }

<<<<<<< Updated upstream
=======
  // get activechallenges from cache or remote if: not cached or forced reload
  public getActiveChallenges(user: number, forcedReload: boolean = false): Observable<any> {
    console.log('called getActiveChallenges');
    // load from remote
    if (forcedReload || this.activechallenges == undefined) {
      // TODO: only load active challenges linked to user
      console.log('... loading from remote');
      let obs = this.http
        .get<any[]>(this.activechallengesUrl)
        .pipe(map(data => this.mapActiveChallenges(data)));
      // fill cache
      // obs.subscribe((activechallenges) => {this.activechallenges = activechallenges;})
      return obs;
    // load from cache
    } else {
      console.log('... using cached');
      return new Observable((obs) => {
        obs.next(this.activechallenges);
        obs.complete();
      })
    }
  }

>>>>>>> Stashed changes
  public createActiveChallenge(activechallenge: any): Observable<any> {
    console.log('posting');
    let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
    return this.http.post<any[]>(this.activechallengesUrl, activechallenge);
    // return new Observable((obs) => {
    //   obs.next({});
    //   obs.complete();
    // })
  }

  // // get challenges for category from cache or remote if: not cached or forced reload
  // public getChallenges(categoryid: number, forcedReload: boolean = false): Observable<any> {
  //   console.log('called getChallenges');
  //   return new Observable((obs) => {
  //     obs.next(
  //
  //     );
  //   });
  //
  //   // remote/cache switch is done by getCategories, just handle Observable
  //   this.getCategories(forcedReload).subscribe((categories) => {
  //     for (let cat of categories) {
  //       // find category,
  //       if (cat.id == categoryid) {
  //         // return its Challenges
  //         this.challengesObservable.next(cat.challenges);
  //         return;
  //       }
  //     }
  //   });
  //   return this.challengesObservable;
  // }

  // public getCategories2(): Category[] {
  //
  //   return [
  //     {id: 1, label: "Nahrung", icon: 'utensils', help: 1, solid: true, isCategory: true},
  //     {id: 2, label: "Verkehr", icon: 'car', help: 2, solid: true, isCategory: true},
  //     {id: 3, label: "Wohnen", icon: 'home', help: 3, solid: false, isCategory: true},
  //     {id: 4, label: "Kleidung", icon: 'tshirt', help: 4, solid: false, isCategory: true}
  //   ] as Category[];
  // }
  //
  // public getChallenges2(categoryid: number): Challenge[] {
  //   let challenges: Challenge[] = [
  //     {id: 1, label: "Regional", icon: 'leaf', help: 0, solid: true, category: 1, info: 'kaufe regional', question: 'wie oft kaufst du regional', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
  //     {id: 2, label: "Saisonal", icon: 'utensils', help: 0, solid: true, category: 1, info: 'kaufe saisonal', question: 'wie oft kaufst du saisonal', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
  //     {id: 3, label: "Vegan", icon: 'leaf', help: 0, solid: false, category: 1, info: 'lebe vegan', question: 'wie oft verzichtest du auf fleisch', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
  //     {id: 4, label: "ÖV", icon: 'car', help: 0, solid: true, category: 2, info: 'öv', question: 'du öv?', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]},
  //     {id: 5, label: "Ferien", icon: 'car', help: 0, solid: true, category: 2, info: 'ferien', question: 'urlaub?', options: ['nie', '1-2 Mal pro Woche', '2+ pro Woche'], impacts: [500, 200, 100]}
  //   ]
  //   return challenges.filter((challenge) => {
  //     return challenge.category == categoryid;
  //   });
  // }
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
  public challenges: Challenge[];
}

// Challenge: provides different options
export class Challenge extends Categorised {
  public category: number;
  public info: string;
  public question: string;
  public options: Option[];
  public impacts: number[];
}

// Options:
export class Option {
  public id: number;
  public title: string;
  public co2: number;
  public challenge: Challenge;
}

// ActiveChallenge: (per user*) challenges that have been started
// *= to do
export class ActiveChallenge {
  public id: number;
  public user: number;
  public challenge: Challenge | number;
  public valueStart: Option | number;
  public valueGoal: Option | number;
  public complete: boolean;
}
