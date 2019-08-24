import { Component, OnInit, Input } from '@angular/core';
import Utils from '../../utility/utils';
import { Category, Challenge } from '../../services/data-service.service';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.scss']
})
export class ChallengeItemComponent implements OnInit {
  @Input() challenge: Category | Challenge;
  private route: string;
  private icon: any;

  faQuestionCircle = faQuestionCircle

  constructor() { }

  ngOnInit() {
    console.log(this.challenge);
    this.route = '/challenge';
    if (this.challenge['isCategory']) {
      this.route = '/category';
    }
    this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
  }

}
