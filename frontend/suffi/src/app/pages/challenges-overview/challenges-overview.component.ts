import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges-overview',
  templateUrl: './challenges-overview.component.html',
  styleUrls: ['./challenges-overview.component.scss']
})
export class ChallengesOverviewComponent implements OnInit {
  private mainchallenges: any = [
    {id: 1, label: "Foodwaste", solid: true},
    {id: 2, label: "Verkehr", solid: true},
    {id: 3, label: "Wohnen", solid: false},
    {id: 4, label: "Kleidung", solid: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
