import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge } from '../../services/data-service.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private challenges: Challenge[];

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.dataservice.getCategories().subscribe((categories) => {
      // find category in data tree
      for (let cat of categories) {
        if (cat.id == id) {
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
