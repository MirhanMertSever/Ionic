import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authenticationService:AuthenticationService, private router:Router) {
    this.getUsers();
  }

  userList:any;

  getUsers() {
    this.authenticationService.getUsers().subscribe(
      (respond:any) => {
          this.userList = respond.data;
      },
      (err:any) => {

      }
    );
  }

  logout() {
    this.router.navigateByUrl("login");
  }
}
