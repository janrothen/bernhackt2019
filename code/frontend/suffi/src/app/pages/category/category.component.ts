import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge } from '../../services/data-service.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private challenges: any = {};

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.challenges = this.dataservice.getCategories().subscribe((categories) => {
      for (let cat of categories) {
        // find category,
        if (cat.id == id) {
          // return its Challenges
          this.challenges = cat.challenges;
          return;
        }
      }
    });
    // console.log(this.challenges);
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
