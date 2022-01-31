import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = window.screen.width >= 414;
  menuIcon: string = '../../assets/shared/icon-hamburger.svg';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.show = !this.show;
    this.menuIcon = !this.show ? 
      '../../assets/shared/icon-hamburger.svg' : 
      '../../assets/shared/icon-close.svg';
  }

}
