import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-challenges-overview',
  templateUrl: './challenges-overview.component.html',
  styleUrls: ['./challenges-overview.component.scss']
})
export class ChallengesOverviewComponent implements OnInit {
  private challenges: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.challenges = [
        {id: 1, label: "Nahrung", solid: true},
        {id: 2, label: "Verkehr", solid: true},
        {id: 3, label: "Wohnen", solid: false},
        {id: 4, label: "Kleidung", solid: false}
      ];
    } else {
      switch (id) {
        case 1:
          this.challenges = [
            {id: 10, label: "Regional", solid: true},
            {id: 20, label: "Saisonal", solid: true},
            {id: 30, label: "Vegan", solid: false},
            {id: 40, label: "Vegetarisch", solid: false}
          ]
      }
    }
  }

}
