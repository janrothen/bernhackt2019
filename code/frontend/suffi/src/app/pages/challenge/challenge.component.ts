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
  // TODO: not hardcode user!!!!
  private user: number = 4;
  public challenge: Challenge;
  public icon: any;
  // using string here for AngularForm's way of checking value (value must be string)
  public current: string;
  public goal: string;
  public isActive: boolean = false;
  public activechallenge: ActiveChallenge;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.dataservice.getCategories().subscribe((categories) => {
      this.challenge = this.dataservice.resolveChallengeById(id);
      this.icon = Utils.iconConfigurationForLabel(this.challenge.icon);
      // cross-check for active challenges
      this.dataservice.getActiveChallenges(this.user).subscribe((activechallenges) => {
        for (let active of activechallenges) {
          if (active.challenge.id == this.challenge.id) {
            // find out which current/goal indexes they are
            for (let i in this.challenge.options) {
              if (this.challenge.options[i].id == active.valueStart.id) {
                this.current = i+'';
              }
              if (this.challenge.options[i].id == active.valueGoal.id) {
                this.goal = i+'';
              }
            }
            this.isActive = true;
            this.activechallenge = active;
            return;
          }
        }
      });
    });
  }

  // get current as number
  public getCurrent(): number {
    return +this.current;
  }

  public startChallenge() {
    let activechallenge = {
      user: this.user,
      challenge: this.challenge.id,
      valueStart: this.challenge.options[this.current].id,
      valueGoal: this.challenge.options[this.goal].id
    };
    this.dataservice.createActiveChallenge(activechallenge).subscribe((result) => {
      // force reload
      this.dataservice.uncacheActiveChallenges();
      this.router.navigate(['']);
    });
  }

  public stopChallenge() {
    // copy to de-reference objects
    let activechallenge = {
      id: this.activechallenge.id,
      user: this.user,
      challenge: this.challenge.id,
      valueStart: this.challenge.options[this.current].id,
      valueGoal: this.challenge.options[this.goal].id,
      challengeComplete: true
    };
    this.dataservice.updateActiveChallenge(activechallenge).subscribe((result) => {
      // force reload
      this.dataservice.uncacheActiveChallenges();
      this.router.navigate(['']);
    });
  }

}
