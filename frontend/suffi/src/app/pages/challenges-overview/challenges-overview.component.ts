import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faUtensils, faCarSide, faHome, faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenges-overview',
  templateUrl: './challenges-overview.component.html',
  styleUrls: ['./challenges-overview.component.scss']
})
export class ChallengesOverviewComponent implements OnInit {
  private challenges: any;
  private challengesstore: any = [
    {id: 1, label: "Nahrung", icon: faUtensils, solid: true, childs: [11,12,13,14,15]},
    {id: 2, label: "Verkehr", icon: faCarSide, solid: true},
    {id: 3, label: "Wohnen", icon: faHome, solid: false},
    {id: 4, label: "Kleidung", icon: faTshirt, solid: false},
    {id: 11, label: "Regional", solid: true},
    {id: 12, label: "Saisonal", solid: true},
    {id: 13, label: "Fertigprodukte", solid: false},
    {id: 14, label: "Vegetarisch", solid: false},
    {id: 15, label: "Vegan", solid: false}
  ]

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    // no id given, take main challenge categories
    if (!id) {
      this.challenges = this.getChallenges([1,2,3,4]);
    // id given, extract its childs
    } else {
      // selected challenge
      let sel = this.getChallenges([id])[0];
      this.challenges = this.getChallenges(sel.childs);
    }
  }

  // return all the challenges from challengesstore with given ids
  private getChallenges(ids: number[]) {
    return this.challengesstore.filter((challenge) => {
     return ids.indexOf(challenge.id) >= 0 ? true : false;
   });
  }

}
