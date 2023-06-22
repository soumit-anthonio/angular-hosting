import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/shared/auth.service';
import { AppModule } from 'src/app/app.module';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service = AuthService;
    // beforeEach((() => {
    //   TestBed.configureTestingModule({
    //     imports: [AppModule],
    //     declarations: [LoginComponent],
    //   }).compileComponents();
    // }));

    beforeEach(async(() => {
      // Create jasmine spy object
      let sortServiceSpy = jasmine.createSpyObj('AuthService', [
        'insertData',
        'getRules',
        'OnPing',
      ]);
      // Provide the dummy/mock data to sortNumberData method.
      sortServiceSpy.insertData.returnValue({
        statusCode: 200,
      });
      TestBed.configureTestingModule({
        providers: [{ provide: AuthService, useValue: sortServiceSpy }],
      });
      //service = TestBed.inject(AuthService);
    }));
  
    it('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });
  
    // it('should create the login', () => {
    //   const fixture = TestBed.createComponent(LoginComponent);
    //   const app = fixture.componentInstance;
    //   expect(app).toBeTruthy();
    // });

});
