import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges-overview',
  templateUrl: './challenges-overview.component.html',
  styleUrls: ['./challenges-overview.component.scss']
})
export class ChallengesOverviewComponent implements OnInit {
  private mainchallenges: any = [
    {id: 1, label: "Foodwaste", bold: true},
    {id: 2, label: "Verkehr", bold: true},
    {id: 3, label: "Wohnen", bold: false},
    {id: 4, label: "Kleidung", bold: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
