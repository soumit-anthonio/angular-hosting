import { Component, OnInit } from '@angular/core';
import { faCoffee,faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  faCoffee = faCoffee;
  wizard=faHatWizard;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }
    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
