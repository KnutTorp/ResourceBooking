import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Catapult';
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.name;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
