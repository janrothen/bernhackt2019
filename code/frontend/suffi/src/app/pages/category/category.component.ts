import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private challenges: any = {};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // let id: number = +this.route.snapshot.paramMap.get('id');
    // // no id given, take main challenge categories
    // if (!id) {
    //   this.challenges = this.getChallenges([1,2,3,4]);
    // // id given, extract its childs
    // } else {
    //   // selected challenge
    //   let sel = this.getChallenges([id])[0];
    //   this.challenges = this.getChallenges(sel.childs);
    // }
  }

}
