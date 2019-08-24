import { Component, OnInit, Input } from '@angular/core';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrls: ['./challenge-button.component.scss']
})
export class ChallengeButtonComponent implements OnInit {
  @Input() challenge: any;

  faQuestionCircle = faQuestionCircle

  constructor() { }

  ngOnInit() {
  }

}
