import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import crewData from '../data.json'

interface Crew {
  name: string,
  images: {
        png : string,
        webp : string
      },
  role: string,
  bio: string
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  crewList: Crew[] = crewData.crew;
  currentCrew: Crew = this.crewList[0];
  constructor() { }

  ngOnInit(): void {
  
  }

  changeCurrent(id: number){
    this.currentCrew = this.crewList[id];
  }

}
