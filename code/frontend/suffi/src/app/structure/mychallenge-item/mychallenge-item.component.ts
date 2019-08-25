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

  constructor() { }

  ngOnInit() {
  }

  // done by getter so (async) changes on challenge are respected
  private getIcon() {
    let challenge: Challenge = this.activechallenge.challenge as Challenge;
    return Utils.iconConfigurationForLabel(challenge.icon)
  }
}
