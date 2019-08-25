import { Component, OnInit } from '@angular/core';

import { DataServiceService, Trophy } from '../../services/data-service.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {
  private trophies: Trophy[];

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    this.dataservice.getTrophies().subscribe((trophies) => {
      this.trophies = trophies as Trophy[];
    });
  }

}
