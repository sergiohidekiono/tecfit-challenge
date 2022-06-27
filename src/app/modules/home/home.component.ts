import { HomeService } from './home.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ // Animation to fadeIn and fadeOut the toolbar button scroll to top
    trigger('fadeScrollButton', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(800)
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  icons: any = [];
  slides: any = [];
  curiosities: any = [];

  isScroll: boolean;

  @HostListener('window:scroll', [])
  onWindowScroll(): any {
    (window.scrollY >= 1) ? this.isScroll = true : this.isScroll = false;
  }

  constructor(private homeService: HomeService) {
    this.isScroll = false;
  }

  ngOnInit() {
    this.homeService.getDataJSON().subscribe((res: any) => {
      this.slides = res.slides;
      this.icons = res.icons;
      this.curiosities = res.curiosities;
    });
    AOS.init();
  }

  scrollTop(): any {
    window.scrollTo(0, 0);
  }

  getSliderClass(isFirst: any, isLast: any, isEven: any, isOdd: any) {
    return {
      active: isFirst,
      lastactive: isLast,
      even: isEven,
      odd: isOdd
    }
  }

  getSliderStyle(src: any) {

    return {
      height: '70vh',
      background: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

}
