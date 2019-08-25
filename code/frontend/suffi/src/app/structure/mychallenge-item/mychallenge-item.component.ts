import { Component, OnInit, Input } from '@angular/core';
import Utils from '../../utility/utils';
import { Challenge, ActiveChallenge, Option } from '../../services/data-service.service';

@Component({
  selector: 'app-mychallenge-item',
  templateUrl: './mychallenge-item.component.html',
  styleUrls: ['./mychallenge-item.component.scss']
})
export class MyChallengeItemComponent implements OnInit {
  @Input() activechallenge: ActiveChallenge;

  constructor() { }

  ngOnInit() {
  }

  // done by getter so (async) changes on challenge are respected
  public getChallenge(): Challenge {
    return this.activechallenge.challenge as Challenge;
  }
  public getGoal(): Option {
    return this.activechallenge.valueGoal as Option;
  }
  public getIcon() {
    let challenge: Challenge = this.activechallenge.challenge as Challenge;
    return Utils.iconConfigurationForLabel(challenge.icon)
  }
}
