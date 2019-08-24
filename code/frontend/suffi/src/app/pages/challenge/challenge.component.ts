import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge } from '../../services/data-service.service'
import Utils from './../../utility/utils';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  private challenge: any;
  private icon: any;
  private current: number;
  private goal: number;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');

    this.challenge = {
      icon: 'cheese',
      label: 'Challenge',
      info: 'Dieser Text beschreibt die Challenge',
      question: 'Wie oft isst du Käse?',
      options: [
        {title: 'nie', co2: '0'},
        {title: 'selten', co2: '200'},
        {title: 'täglich', co2: '400'}
      ]
    }

    this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
  }

}
