import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

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

  slides = [
    {
      id: 1,
      src: '../../../assets/images/home/third-section/1.jpg',
      title: 'Crossfit',
      content: 'O objetivo do Crossfit é potencializar todas as principais capacidades físicas do ser humano, como a resistência respiratória e cardiovascular, a resistência muscular, a flexibilidade, força, coordenação, potência, agilidade, equilíbrio e velocidade.'
    },
    {
      id: 2,
      src: '../../../assets/images/home/third-section/2.jpg',
      title: 'Musculação',
      content: 'É uma modalidade de treinamento físico realizado contra resistência de pesos externos, chamada também de treino resistido, que tem como objetivo o aumento hipertrofia muscular, ganho de força e potência.'
    },
    {
      id: 3,
      src: '../../../assets/images/home/third-section/3.jpg',
      title: 'Pilates',
      content: 'É um treinamento contra-resistência que tem como objetivo proporcionar a melhoria do condicionamento físico e do bem-estar do praticante. Sendo assim, esse exercício promove força, flexibilidade, equilíbrio, controle corporal, entre outros benefícios.'
    },
    {
      id: 4,
      src: '../../../assets/images/home/third-section/4.jpg',
      title: 'Artes marciais',
      content: 'São disciplinas físicas e mentais codificadas em diferentes graus, que tem como objetivo um alto desenvolvimento de seus praticantes para que possam defender-se ou submeter o adversário mediante diversas técnicas.'
    }
  ];

  icons = [
    {
      id: 1,
      src: '../../../assets/images/home/second-section/1.png',
      title: 'Crossfit',
      alt: 'icon crossfit'
    },
    {
      id: 2,
      src: '../../../assets/images/home/second-section/2.png',
      title: 'Musculação',
      alt: 'icon musculação'
    },
    {
      id: 3,
      src: '../../../assets/images/home/second-section/3.png',
      title: 'Pilates',
      alt: 'icon pilates'
    },
    {
      id: 4,
      src: '../../../assets/images/home/second-section/4.png',
      title: 'Artes marciais',
      alt: 'icon arte marciais'
    }
  ];

  isScroll: boolean;

  constructor() {
    this.isScroll = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): any { // Detect how much is scrolling on the page
    if (window.scrollY >= 1) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

  // TODO scrolling to top smooth
  scrollTop(): any { // Scrolling to the top on click toolbar button
    window.scrollTo(0, 0);
  }

  ngOnInit() { }

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
    // const mobileSize = window.matchMedia("(max-width: 425px)");
    // if (mobileSize.matches) {
    // } else {
    //   return {
    //     height: '70vh',
    //     background: `url(${src})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    //   }
    // }

  }

}
