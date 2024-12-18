import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder:FormBuilder, private authenticationService: AuthenticationService, private router:Router) { }

  userInformation!:FormGroup;

  ngOnInit() {
    this.userInformation = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get email() {
    return this.userInformation.get("email") as FormControl;
  }

  get password() {
    return this.userInformation.get("password") as FormControl;
  }

  loginFunction() {
    this.authenticationService.login(this.userInformation.value).subscribe(
      (respond:any) => {
        this.router.navigateByUrl("home");
      },
      (err:any) => {
        this.authenticationService.errorAlert("Uyarı", err.error.error);
      }
    );
  }

  register() {
    this.router.navigateByUrl("register");
  }
}
