import { Component, OnInit } from '@angular/core';
import { DataServiceService, Category } from '../../services/data-service.service';

@Component({
  selector: 'app-categories-overview',
  templateUrl: './categories-overview.component.html',
  styleUrls: ['./categories-overview.component.scss']
})
export class CategoriesOverviewComponent implements OnInit {
  private categories: Category[] = [];
  // private challenges: any = [
  //   {id: 1, label: "Nahrung", icon: ['fas', 'utensils'], solid: true, childs: [11,12,13,14,15]},
  //   {id: 2, label: "Verkehr", icon: ['fas', 'car'], solid: true},
  //   {id: 3, label: "Wohnen", icon: ['fas', 'home'], solid: false},
  //   {id: 4, label: "Kleidung", icon: ['fas', 'tshirt'], solid: false},
  //   {id: 11, label: "Regional", solid: true},
  //   {id: 12, label: "Saisonal", solid: true},
  //   {id: 13, label: "Fertigprodukte", solid: false},
  //   {id: 14, label: "Vegetarisch", solid: false},
  //   {id: 15, label: "Vegan", solid: false}
  // ]

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    // load data tree (contains categories and their challenges)
    this.dataservice.getCategories()
    .subscribe(
      (categories) => {
        this.categories = categories;
      }
    )
  }
}
