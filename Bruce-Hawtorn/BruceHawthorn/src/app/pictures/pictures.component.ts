import { Component, OnInit } from '@angular/core';
import { Pictures } from "../pictures";
@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pictures: Pictures[] = [
    {
      url: "../../assets/20190813_142139.jpg",
      description: "First real view of Mt Katatian",
      location: "Maine",
      date: 20190813
    },
    {
      url: "../../assets/20190415_222357.jpg",
      description: "After a very cold night",
      location: "unknown",
      date: 20190415
    },
    {
      url: "../../assets/20190510_222359.jpg",
      description: "Angels rest",
      location: "Virginia",
      date: 20190510
    },
    {
      url: "../../assets/20190707_201207.jpg",
      description: "Mt Killington",
      location: "Killington, Vermont",
      date: 20190707
    },
    {
      url: "../../assets/FullSizeR (2).jpg",
      description: "Smoky Mountains",
      location: "Tennessee",
      date: 0
    },
    {
      url: "../../assets/IMG-20190416-WA0003.jpg",
      description: "Same day of the post",
      location: "Damascus, Virginia",
      date: 20190416
    },
    {
      url: "../../assets/IMG-20190430-WA0001.jpg",
      description: "Myself leaving Damascus Virginia on the Appalachian Trail",
      location: "Damascus, Virginia",
      date: 20190430
    },
    
  ]
}
