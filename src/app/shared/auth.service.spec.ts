import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

// describe('AuthService', () => {
//   let service: AuthService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [AngularFireAuthModule,RouterModule],
//       providers: [AuthService,{ provide: LoginComponent, useValue: {}}],
//     });
//     service = TestBed.get(AuthService);
//   });
//   it('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });
//   it('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });

 



// });


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireAuthModule,RouterModule],
      providers: [AuthService,{ provide: LoginComponent, useValue: {}}],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
