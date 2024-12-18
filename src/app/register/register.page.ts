import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router, private authenticationService:AuthenticationService, private formBuilder:FormBuilder) { }

  registerInformation!:FormGroup;

  ngOnInit() {
    this.registerInformation = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get name() {
    return this.registerInformation.get("name") as FormControl;
  }

  get surname() {
    return this.registerInformation.get("surname") as FormControl;
  }
  get email() {
    return this.registerInformation.get("email") as FormControl;
  }

  get password() {
    return this.registerInformation.get("password") as FormControl;
  }

  newRegister() {
    this.authenticationService.register({
      "email": "eve.holt@reqres.in",
      "password": "pistol"
  }).subscribe(
      (response:any) => {
        this.router.navigateByUrl("home");
      },
      (err:any) => {}
    );
  }
}
