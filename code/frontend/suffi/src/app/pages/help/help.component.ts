import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge } from '../../services/data-service.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  public help: any;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');

    this.help = '<h1>Nahrung</h1><p>42% des schweizweiten CO2-Ausstosses wird durch unsere Nahrung verursacht.</p>'
  }

}
