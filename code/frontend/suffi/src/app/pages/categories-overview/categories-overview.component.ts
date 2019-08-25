import { Component, OnInit } from '@angular/core';
import { DataServiceService, Category, Challenge, ActiveChallenge } from '../../services/data-service.service';

@Component({
  selector: 'app-categories-overview',
  templateUrl: './categories-overview.component.html',
  styleUrls: ['./categories-overview.component.scss']
})
export class CategoriesOverviewComponent implements OnInit {
  public categories: Category[] = [];
  public activechallenges: ActiveChallenge[] = [];

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    // load data tree (contains categories and their challenges)
    this.dataservice.getCategories()
    .subscribe(
      (categories) => {
        this.categories = categories;
      }
    )
    this.dataservice.getActiveChallenges(4).subscribe((activechallenges) => {
      this.activechallenges = activechallenges as ActiveChallenge[];
    });
  }
}
