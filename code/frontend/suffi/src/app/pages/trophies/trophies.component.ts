import { Component, OnInit } from '@angular/core';

import { DataServiceService, Trophy } from '../../services/data-service.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {
  public trophies: Trophy[];

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    // get all trophies and completed challenges
    this.dataservice.getTrophies().subscribe((trophies) => {
      // this.trophies = trophies as Trophy[];
      this.dataservice.getCompletedChallenges(4).subscribe((completed) => {
        this.trophies = [];
        for (let comp of completed) {
          for (let trophy of trophies as Trophy[]) {
            if (trophy.challenge == comp.challenge) {
              this.trophies.push(trophy);
            }
          }
        }
      });
    });
  }

}
