import { Component, OnInit, Input } from '@angular/core';

import { Category, Challenge } from '../../services/data-service.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {
  @Input() challenges: Category[] | Challenge[];

  constructor() { }

  ngOnInit() {
  }

}
