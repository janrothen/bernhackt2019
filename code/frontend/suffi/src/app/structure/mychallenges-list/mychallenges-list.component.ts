import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService, ActiveChallenge } from '../../services/data-service.service'

@Component({
  selector: 'app-mychallenges-list',
  templateUrl: './mychallenges-list.component.html',
  styleUrls: ['./mychallenges-list.component.scss']
})
export class MyChallengesListComponent implements OnInit {
  @Input() challenges: any;

  constructor(private dataservice: DataServiceService) { }

  ngOnInit() {
  }

}
