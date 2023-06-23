import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

function setUp() {
  // const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
  TestBed.configureTestingModule({
    providers: [
      AuthService
    ],
  });
  const authService = TestBed.inject(AuthService);
  return { authService };
}
describe('CalculatorService', () => {
  it('should call Login Method', () => {
    const { authService } = setUp();

    console.log('calling Login');
    let result = authService.login('soumit@gmail.com', 'password');
    expect(result).toHaveBeenCalled();
  });

  it('should call Register Method', () => {
    const { authService } = setUp();
    console.log('calling Register');
    let result = authService.register('soumit@gmail.com', 'password');
    expect(result).toHaveBeenCalled();
  });

  it('should call LogOut Method', () => {
    const { authService } = setUp();
    console.log('calling Logout');
    let result = authService.logout();
    expect(result).toHaveBeenCalled();
  });
});