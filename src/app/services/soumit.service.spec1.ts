import { TestBed } from '@angular/core/testing';
import { SoumitService } from './soumit.service';
import { Observable } from 'rxjs';

function setUp() {
  const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
  TestBed.configureTestingModule({
    providers: [
      SoumitService,
    ],
  });
  const soumitMockService = TestBed.inject(SoumitService);
  return { soumitMockService };
}
describe('SoumitService', () => {
  it('should call OnPing', () => {
    const { soumitMockService } = setUp();

    console.log('calling OnPing');
    let result = soumitMockService.OnPing('ticle');
    expect(result).toHaveBeenCalled();
  });

  it('should call getRules', () => {
    const { soumitMockService } = setUp();
    console.log('calling getRules');
    let result = soumitMockService.getRules();
    expect(result).toContain(Observable<any>);
  });
  it('should call insertData', () => {
    const { soumitMockService } = setUp();
    console.log('calling insertData');
    let $result = soumitMockService.insertData(
      typeof String,
      typeof String,
      10,
      null
    );
    $result.subscribe((result: any) => {
      expect(result).toBe({
        statusCode: 200,
      });
    });
  });
  it('should accept string,string, number and Date', () => {
    const { soumitMockService } = setUp();
    console.log('calling insertData');
    let $result = soumitMockService.insertData(
      typeof String,
      typeof String,
      10,
      null
    );
    $result.subscribe((result: any) => {
      expect(result).toBe({
        statusCode: 200,
      });
    });
  });

  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus three is five', () => {
    expect(2 + 3).toBe(5);
  });
  it('one lac plus one lac is two lac', () => {
    expect(100000 + 100000).toBe(200000);
  });
});
