import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuicknavbarComponent } from './structure/quicknavbar/quicknavbar.component';
import { MychallengesComponent } from './structure/mychallenges/mychallenges.component';
import { ChallengesOverviewComponent } from './pages/challenges-overview/challenges-overview.component';
import { ChallengesListComponent } from './structure/challenges-list/challenges-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    QuicknavbarComponent,
    MychallengesComponent,
    ChallengesOverviewComponent,
    ChallengesListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
