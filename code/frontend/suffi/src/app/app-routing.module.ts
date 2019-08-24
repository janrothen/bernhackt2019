import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesOverviewComponent } from './pages/challenges-overview/challenges-overview.component'


const routes: Routes = [
  { path: '', redirectTo: 'challenges', pathMatch: 'full' },
  { path: 'challenges', component: ChallengesOverviewComponent },
  { path: 'challenges/:id', component: ChallengesOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
