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
  private trophiesUrl = environment.endpoint + 'trophy/';

  private categories: Category[] = undefined;
  private activechallenges: ActiveChallenge[] = undefined;
  private challenges: Challenge[] = undefined;
  private options: Option[] = undefined;
  private trophies: Trophy[] = undefined;

  constructor(private http: HttpClient) { }

  // map data, cache and transform references(id) to actual object references
  private mapCategories(data: any): Category[] {
    this.categories = [];
    if (!data || !data.results || data.results.length == 0) {
      return this.categories;
    }
    this.categories = data.results as Category[];
    // mark all categories as category for challenge-item button
    // and extract challenges and options for quick access
    this.challenges = [];
    this.options = [];
    for (let cat of this.categories) {
      cat.solid = true;
      cat.isCategory = true;
      // "collect" this categories challenges
      this.challenges = this.challenges.concat(cat.challenges);
      for (let chl of cat.challenges) {
        // "collect" their options
        this.options = this.options.concat(chl.options);
      }
    }
    console.log('categories loaded');
    return this.categories;
  }

  // map data, cache and transform references(id) to actual object references
  private mapActiveChallenges(data: any): ActiveChallenge[] {
    this.activechallenges = [];
    if (!data || !data.results || data.results.length == 0) {
      return this.activechallenges;
    }
    this.activechallenges = data.results as ActiveChallenge[];
    this.resolveActiveChallenges();
    return this.activechallenges;
  }

  // map data, cache and transform references(id) to actual object references
  private mapTrophies(data: any): Trophy[] {
    this.trophies = [];
    if (!data || !data.results || data.results.length == 0) {
      return this.trophies;
    }
    this.trophies = data.results as Trophy[];
    console.log(this.trophies);
    return this.trophies;
  }
  
  // resolves numeric references to object references
  private resolveActiveChallenges() {
    this.getCategories().subscribe((categories) => {
      for (let index in this.activechallenges) {
        this.resolveNumRef(this.activechallenges[index], 'challenge', (id) => {return this.resolveChallengeById(id)});
        this.resolveNumRef(this.activechallenges[index], 'valueStart', (id) => {return this.resolveOptionById(id)});
        this.resolveNumRef(this.activechallenges[index], 'valueGoal', (id) => {return this.resolveOptionById(id)});
      }
    });
  }

  // resolves numeric references to object references, wrap the resolveById
  // function around arrow-syntax to keep "this" context
  private resolveNumRef(onObject: any, field: string, resolveById: any) {
    if (typeof onObject[field] === 'number') {
      // id as number
      let id: number = +onObject[field];
      // find by id (intented use of resolveById function)
      onObject[field] = resolveById(id);
    }
  }
  // will only return not-null once tree is loaded!
  public resolveCategoryById(id: number): Category {
    for (let cat of this.categories) {
      if (cat.id == id) {
        return cat;
      }
    }
    return null;
  }
  // will only return not-null once tree is loaded!
  public resolveChallengeById(id: number): Challenge {
    for (let chl of this.challenges) {
      if (chl.id == id) {
        return chl;
      }
    }
    return null;
  }
  // will only return not-null once tree is loaded!
  public resolveOptionById(id: number): Option {
    for (let opt of this.options) {
      if (opt.id == id) {
        return opt;
      }
    }
    return null;
  }

  // get categories from cache or remote if: not cached or forced reload
  public getCategories(forcedReload: boolean = false): Observable<any> {
    // load from remote
    if (forcedReload || this.categories == undefined) {
      console.log('... loading categories from remote');
      return this.http.get<any[]>(this.categoriesUrl)
        .pipe(map(data => this.mapCategories(data)));
    // load from cache
    } else {
      console.log('... using cached categories');
      return new Observable((obs) => {
        obs.next(this.categories);
        obs.complete();
      })
    }
  }

  // get activechallenges from cache or remote if: not cached or forced reload
  public getActiveChallenges(user: number, forcedReload: boolean = false): Observable<any> {
    // load from remote
    if (forcedReload || this.activechallenges == undefined) {
      // TODO: only load active challenges linked to user
      console.log('... loading activechallenges from remote');
      return this.http.get<any[]>(this.activechallengesUrl)
        .pipe(map(data => this.mapActiveChallenges(data)));
    // load from cache
    } else {
      console.log('... using cached activechallenges');
      return new Observable((obs) => {
        obs.next(this.activechallenges);
        obs.complete();
      })
    }
  }

  // get categories from cache or remote if: not cached or forced reload
  public getTrophies(forcedReload: boolean = false): Observable<any> {
    // load from remote
    if (forcedReload || this.trophies == undefined) {
      console.log('... loading trophies from remote');
      return this.http.get<any[]>(this.trophiesUrl)
        .pipe(map(data => this.mapTrophies(data)));
    // load from cache
    } else {
      console.log('... using cached trophies');
      return new Observable((obs) => {
        obs.next(this.categories);
        obs.complete();
      })
    }
  }

  public uncacheActiveChallenges() {
    this.activechallenges = undefined;
  }

  public createActiveChallenge(activechallenge: any): Observable<any> {
    return this.http.post<any[]>(this.activechallengesUrl, activechallenge);
  }
  public deleteActiveChallenge(activechallenge: any): Observable<any> {
    let url: string = this.activechallengesUrl + activechallenge.id + '/';
    return this.http.delete<any[]>(url, activechallenge);
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

// Trophy: (per user*) trophy that have been completed
// *= to do
export class Trophy {
  public id: number;
  public user: number;
  public icon: any;
  public label: string;
  public challenge: Challenge | number;
}