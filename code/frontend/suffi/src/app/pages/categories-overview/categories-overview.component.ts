import { Component, OnInit } from '@angular/core';
import { DataServiceService, Category, Challenge } from '../../services/data-service.service';

@Component({
  selector: 'app-categories-overview',
  templateUrl: './categories-overview.component.html',
  styleUrls: ['./categories-overview.component.scss']
})
export class CategoriesOverviewComponent implements OnInit {
  private categories: Category[] = [];
  private activechallenges: Challenge[] = [];

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    // load data tree (contains categories and their challenges)
    this.dataservice.getCategories()
    .subscribe(
      (categories) => {
        this.categories = categories;
        this.activechallenges = this.categories[0].challenges;
      }
    )
  }
}
