import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// pages
import { CategoriesOverviewComponent } from './pages/categories-overview/categories-overview.component';
import { CategoryComponent } from './pages/category/category.component';
// structure
import { QuicknavbarComponent } from './structure/quicknavbar/quicknavbar.component';
import { MychallengesComponent } from './structure/mychallenges/mychallenges.component';
import { ChallengesListComponent } from './structure/challenges-list/challenges-list.component';
import { ChallengeButtonComponent } from './structure/challenge-button/challenge-button.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesOverviewComponent,
    CategoryComponent,
    QuicknavbarComponent,
    MychallengesComponent,
    ChallengesListComponent,
    ChallengeButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(fas);
  }
}
