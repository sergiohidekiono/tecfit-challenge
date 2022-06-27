import { UserService } from './user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;

  isMobileSize!: boolean;

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.isMobileSize = width <= 767;
  }

  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getUsers();
    AOS.init();
    this.onResize();
  }

  getUsers() {
    const payload = '100';
    this.userService.getUsers(payload).subscribe({
      next: (res) => { this.users = res; },
      error: (err) => { this.sharedService.showErrorAdd(err.error.error); },
      complete: () => { }
    });
  }
}
