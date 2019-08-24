import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesOverviewComponent } from './pages/challenges-overview/challenges-overview.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ChallengesOverviewComponent },
  { path: 'home/:id', component: ChallengesOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
