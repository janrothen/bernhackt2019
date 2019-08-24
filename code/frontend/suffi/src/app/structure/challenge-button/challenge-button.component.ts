import { Component, OnInit, Input } from '@angular/core';
import Utils from './../../utility/utils';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrls: ['./challenge-button.component.scss']
})
export class ChallengeButtonComponent implements OnInit {
  @Input() challenge: any;
  private icon: any;

  faQuestionCircle = faQuestionCircle

  constructor() { }

  ngOnInit() {
    this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
  }

}
