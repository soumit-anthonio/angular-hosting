import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { of } from 'rxjs';
import { SoumitService } from 'src/app/services/soumit.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  //fixture.debugElement.injector.get(SoumitBaseService);
  // let service = TestBed.inject(SoumitService);
  let service: SoumitService;
  beforeEach(async(() => {
    // Create jasmine spy object
    // Provide the dummy/mock data to sortNumberData method.
    let sortServiceSpy = jasmine.createSpyObj('SoumitService', [
      'insertData',
      'getRules',
      'OnPing',
    ]);
    sortServiceSpy.insertData.returnValue({
      statusCode: 200,
    });
    TestBed.configureTestingModule({
      providers: [{ provide: SoumitService, useValue: sortServiceSpy }],
    });
    service = TestBed.inject(SoumitService);
  }));
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [],
  //     declarations: [ProductComponent],
  //   }).compileComponents();
  // });

  it('should create the product', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call insertData', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'calculate').and.returnValue(1000);
    spyOn(app, 'saveConfigLocally').and.stub();
    spyOn(app, 'resetControl').and.stub();
    spyOn(service, 'insertData').and.callFake(() => {
      return of({
        statusCode: 200,
      });
    });
    app.addClicked();
    expect(app.data).toEqual({
      statusCode: 200,
    });
  });
});
