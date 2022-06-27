import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  menuList: any = [
    { id: 1, description: 'Home', link: '/home', icon: 'fa-solid fa-house' },
    { id: 2, description: 'Colaboradores', link: '/user', icon: 'fa-solid fa-users' },
    { id: 3, description: 'Sobre', link: '/about', icon: 'fa-solid fa-building' },
    { id: 4, description: 'Sair', icon: 'fa-solid fa-right-from-bracket' },
  ];

  users: any;
  emailLogin = sessionStorage.getItem('email');
  profile: any;
  showHamburguerMenu: boolean = false;

  public windowWidth: any;
  public windowHeight: any;
  isMobileSize!: boolean;

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.isMobileSize = width <= 767;
  }

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 425) {
      this.showHamburguerMenu = true;
    }
    this.onResize();
    this.getUsers();
  }

  getUsers() {
    const payload = '100';
    this.userService.getUsers(payload).subscribe({
      next: (res) => {
        this.users = res;
        this.users.data.forEach((user: any, index: any) => {
          if (this.emailLogin === user.email) {
            if (index === 1 || index === 2 || index === 6 || index === 11) {
              this.profile = {
                avatar: user.avatar,
                gender: 'f',
                name: `${user.first_name} ${user.last_name}`,
                email: `${user.email}`,
                role: 'Analista Sênior, Back-End'
              };
            } else {
              this.profile = {
                avatar: user.avatar,
                gender: 'm',
                name: `${user.first_name} ${user.last_name}`,
                email: `${user.email}`,
                role: 'Analista Sênior, Front-End'
              };
            }
          }
        });
      },
      error: (err) => { },
      complete: () => { }
    });
  }

  redirect() {
    this.route.navigateByUrl('/home');
  }

  logout() {
    sessionStorage.clear();
    this.route.navigateByUrl('');
  }
}
