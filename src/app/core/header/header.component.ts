import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: any = [
    { id: 1, description: 'Home', link: '/home' },
    { id: 2, description: 'Usuários', link: '/user' },
    { id: 3, description: 'Sobre', link: '/about' }
  ];

  constructor() { }

  ngOnInit() { }

}
