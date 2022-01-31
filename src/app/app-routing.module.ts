import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home', bg: "url('../assets/home/background-home-desktop.jpg')"} },
  { path: 'destination', component: DestinationComponent, data: { state: 'destination', bg:"url('../assets/destination/background-destination-desktop.jpg')"} },
  { path: 'crew', component: CrewComponent, data: { state: 'crew', bg: "url('../assets/crew/background-crew-desktop.jpg')"} },
  { path: 'technology', component: TechnologyComponent, data: { state: 'technology', bg: "url('../assets/technology/background-technology-desktop.jpg')"} }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
