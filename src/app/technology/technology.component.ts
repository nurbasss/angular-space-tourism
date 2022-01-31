import { Component, OnInit } from '@angular/core';
import techData from '../data.json';

interface Technology{
  name: string,
  images: {
    portrait: string,
    landscape: string
  },
  description: string,
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyList: Technology[] = techData.technology;
  currentTech: Technology = this.technologyList[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrent(id: number){
    this.currentTech = this.technologyList[id];
  }

}
