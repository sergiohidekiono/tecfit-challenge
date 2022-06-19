import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      id: 1,
      src: '../../../assets/images/home/1.jpg',
      title: 'Crossfit',
      content: 'O objetivo do Crossfit é potencializar todas as principais capacidades físicas do ser humano, como a resistência respiratória e cardiovascular, a resistência muscular, a flexibilidade, força, coordenação, potência, agilidade, equilíbrio e velocidade.'
    },
    {
      id: 2,
      src: '../../../assets/images/home/2.jpg',
      title: 'Musculação',
      content: 'É uma modalidade de treinamento físico realizado contra resistência de pesos externos, chamada também de treino resistido, que tem como objetivo o aumento hipertrofia muscular, ganho de força e potência.'
    },
    {
      id: 3,
      src: '../../../assets/images/home/3.jpg',
      title: 'Pilates',
      content: 'É um treinamento contra-resistência que tem como objetivo proporcionar a melhoria do condicionamento físico e do bem-estar do praticante. Sendo assim, esse exercício promove força, flexibilidade, equilíbrio, controle corporal, entre outros benefícios.'
    },
    {
      id: 4,
      src: '../../../assets/images/home/4.jpg',
      title: 'Artes marciais',
      content: 'São disciplinas físicas e mentais codificadas em diferentes graus, que tem como objetivo um alto desenvolvimento de seus praticantes para que possam defender-se ou submeter o adversário mediante diversas técnicas.'
    }
  ];

  constructor() { }

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
