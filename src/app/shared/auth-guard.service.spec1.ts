// import { TestBed } from '@angular/core/testing';

// import { AuthGuardService } from './auth-guard.service';

// describe('AuthGuardService', () => {
//   let service: AuthGuardService;


//   it('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });
// });


import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';

function setUp() {
  TestBed.configureTestingModule({
    providers: [
      AuthGuardService
    ],
  });
  const authGuardMockService = TestBed.inject(AuthGuardService);
  // const loggerServiceSpy = TestBed.inject(
  //   LoggerService
  // ) as jasmine.SpyObj<LoggerService>;
  return { authGuardMockService };
}
describe('AuthGuardService', () => {
  it('should call canActivate', () => {
    const { authGuardMockService} = setUp();

    console.log('calling add');
    let result = authGuardMockService.canActivate();
    expect(result).toBe(true);
    // expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should call routeGuard', () => {
    const { authGuardMockService } = setUp();
    console.log('calling subtract');
    let result = authGuardMockService.routeGuard();
    expect(result).toHaveBeenCalled();
    // expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});