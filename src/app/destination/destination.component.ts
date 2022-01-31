import { Component, OnInit } from '@angular/core';
import contentData from '../data.json';

interface Destination {
  name: string;
  images:{
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinations: Destination[] = contentData.destinations;
  currentDestination: Destination = this.destinations[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrent(id: number){
    this.currentDestination = this.destinations[id];
  }

}
