import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge, ActiveChallenge } from '../../services/data-service.service'
import Utils from './../../utility/utils';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  private challenge: Challenge;
  private icon: any;
  private current: number;
  private goal: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.dataservice.getCategories().subscribe((categories) => {
      // find challenge in data tree
      for (let cat of categories) {
        for (let chl of cat.challenges) {
          if (chl.id == id) {
            this.challenge = chl;
            this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
            return;
          }
        }
      }
    });
    //
    // this.challenge = {
    //   icon: 'cheese',
    //   label: 'Challenge',
    //   info: 'Dieser Text beschreibt die Challenge',
    //   question: 'Wie oft isst du Käse?',
    //   options: [
    //     {title: 'nie', co2: '0'},
    //     {title: 'selten', co2: '200'},
    //     {title: 'täglich', co2: '400'}
    //   ]
    // }
    //
    // this.icon = Utils.iconConfigurationForLabel(this.challenge.icon)
  }

  private startChallenge() {
    let activechallenge = {
      user: 4,
      challenge: this.challenge.id,
      valueStart: this.challenge.options[this.current].id,
      valueGoal: this.challenge.options[this.goal].id
    };
    this.dataservice.createActiveChallenge(activechallenge).subscribe((result) => {
      this.router.navigate(['']);
    });
  }

}
