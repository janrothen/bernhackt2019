import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService, Challenge, ActiveChallenge } from '../../services/data-service.service'

@Component({
  selector: 'app-mychallenges-list',
  templateUrl: './mychallenges-list.component.html',
  styleUrls: ['./mychallenges-list.component.scss']
})
export class MyChallengesListComponent implements OnInit {
  @Input() challenges: any;
  private activechallenges: ActiveChallenge[];

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
    this.dataservice.getActiveChallenges(4).subscribe((activechallenges) => {
      this.activechallenges = activechallenges as ActiveChallenge[];
    });
  }

}
