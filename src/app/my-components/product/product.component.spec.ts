import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { of } from 'rxjs';
import { SoumitService } from 'src/app/services/soumit.service';
import { SoumitBaseService } from 'src/app/services/soumitbaseservice';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ProductComponent],
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ProductComponent],
  //   });
  //   fixture = TestBed.createComponent(ProductComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
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
    let service = TestBed.inject(SoumitService)//fixture.debugElement.injector.get(SoumitBaseService);
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
