import { AfterViewInit, Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  mySwiper: Swiper;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
  
    this.mySwiper = new Swiper('.swiper-container');
  
  }

}
