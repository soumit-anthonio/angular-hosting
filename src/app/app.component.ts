import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'soumit-angular';
  /**
   *
   */
  constructor(private auth: AuthService) {}

  logout() {
    if (localStorage.getItem('token') != undefined) {
      alert('We will miss you and hope to see you soon.');
    }
    this.auth.logout();
  }
}
