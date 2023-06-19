import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    debugger;
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (response: any) => {
        console.log(response);
        debugger;
        localStorage.setItem('token', response.user.refreshToken);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        debugger;
        console.log('Something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }
  //Register method
  register(email: string, password: string) {
    debugger;
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        debugger;
        alert('Registration Successful.');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  //Sign Out
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
