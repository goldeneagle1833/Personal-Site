import { Component, OnInit } from '@angular/core';
import { Timeline } from '../../app/timeline';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  times: Timeline[] =[
    {
      date: 2016,
      job: "marines",
      discription: "asdfafe"
    },
    {
      date: 2018,
      job: "CNC opratior",
      discription: "school"
    },
    {
      date: 2019,
      job: "CNC op",
      discription: "cincy"
    },
    {
      date: 2019,
      job: "hiking",
      discription: "AT"
    },
    {
      date: 2020,
      job: "King memory",
      discription: "ram lots of ram"
    }
  ]
}
