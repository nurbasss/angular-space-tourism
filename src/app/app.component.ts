import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'space-tourism';
  
  prepareRoute(outlet: RouterOutlet) {
    document.body.style.backgroundImage = outlet.activatedRouteData.bg;
    return outlet.activatedRouteData.state;
  }
}
