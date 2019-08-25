import { Component, OnInit, Input } from '@angular/core';
import Utils from '../../utility/utils';
import { Challenge, ActiveChallenge } from '../../services/data-service.service';

@Component({
  selector: 'app-mychallenge-item',
  templateUrl: './mychallenge-item.component.html',
  styleUrls: ['./mychallenge-item.component.scss']
})
export class MyChallengeItemComponent implements OnInit {
  @Input() activechallenge: ActiveChallenge;
  // private challenge: Challenge;
  // private route: string;
  private icon: any;

  constructor() { }

  ngOnInit() {
    // this.route = '/challenge';
    // if (this.challenge['isCategory']) {
    //   this.route = '/category';
    // }
    // this.challenge = this.activechallenge.challenge;
    this.icon = Utils.iconConfigurationForLabel(this.activechallenge.challenge.icon)
  }
}
