import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    public authService: AuthService
  ) { }

  showError: boolean = false;

  login() {
      this.showError = false;
      this.authService.login().subscribe(
          result => {
              this.showError = !result;
          }
      );
  }

}
