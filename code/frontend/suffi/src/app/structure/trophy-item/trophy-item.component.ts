import { Component, OnInit, Input } from '@angular/core';
import Utils from '../../utility/utils';
import { Trophy } from '../../services/data-service.service';

@Component({
  selector: 'app-trophy-item',
  templateUrl: './trophy-item.component.html',
  styleUrls: ['./trophy-item.component.scss']
})
export class TrophyItemComponent implements OnInit {
  @Input() trophy: Trophy;
  private icon: any;

  constructor() { }

  ngOnInit() {
    this.icon = Utils.iconConfigurationForLabel(this.trophy.icon)
  }
}
