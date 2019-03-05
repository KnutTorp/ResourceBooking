import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser } from '../domain/user';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Logg inn';
  errorMessage: string;
  user: IUser;
  isLoggedIn: boolean ;

  constructor(
     private authService: AuthService,
     private router: Router
              ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.name;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      this.router.navigate(['/resources']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
