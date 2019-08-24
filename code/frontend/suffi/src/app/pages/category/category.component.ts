import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


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
