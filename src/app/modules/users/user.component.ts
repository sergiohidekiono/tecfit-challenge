import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getUsers();
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
