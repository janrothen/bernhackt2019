import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrls: ['./challenge-button.component.scss']
})
export class ChallengeButtonComponent implements OnInit {
  @Input() challenge: any;

  constructor() { }

  ngOnInit() {
  }

}
