import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesOverviewComponent } from './pages/categories-overview/categories-overview.component';
import { CategoryComponent } from './pages/category/category.component';
import { HelpComponent } from './pages/help/help.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { TrophiesComponent } from './pages/trophies/trophies.component';
import { FriendsComponent } from './pages/friends/friends.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesOverviewComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'help/:id', component: HelpComponent },
  { path: 'challenge/:id', component: ChallengeComponent },
  { path: 'trophies', component: TrophiesComponent },
  { path: 'friends', component: FriendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
