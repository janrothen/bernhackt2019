import { Component, OnInit, Input } from '@angular/core';
import Utils from '../../utility/utils';
import { Challenge } from '../../services/data-service.service';

@Component({
  selector: 'app-mychallenge-item',
  templateUrl: './mychallenge-item.component.html',
  styleUrls: ['./mychallenge-item.component.scss']
})
export class MyChallengeItemComponent implements OnInit {
  @Input() challenge:  Challenge;
  private route: string;
  private icon: any;

  constructor() { }

  ngOnInit() {
    this.route = '/challenge';
    if (this.challenge['isCategory']) {
      this.route = '/category';
    }
    this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
  }
}
