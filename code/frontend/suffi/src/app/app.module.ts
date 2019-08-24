import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// pages
import { CategoriesOverviewComponent } from './pages/categories-overview/categories-overview.component';
import { CategoryComponent } from './pages/category/category.component';
import { HelpComponent } from './pages/help/help.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { TrophiesComponent } from './pages/trophies/trophies.component';
import { FriendsComponent } from './pages/friends/friends.component';
// structure
import { QuicknavbarComponent } from './structure/quicknavbar/quicknavbar.component';
import { MyChallengesListComponent } from './structure/mychallenges-list/mychallenges-list.component';
import { MyChallengeItemComponent } from './structure/mychallenge-item/mychallenge-item.component';
import { ChallengesListComponent } from './structure/challenges-list/challenges-list.component';
import { ChallengeItemComponent } from './structure/challenge-item/challenge-item.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesOverviewComponent,
    CategoryComponent,
    QuicknavbarComponent,
    ChallengesListComponent,
    ChallengeItemComponent,
    MyChallengesListComponent,
    MyChallengeItemComponent,
    HelpComponent,
    ChallengeComponent,
    TrophiesComponent,
    FriendsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
