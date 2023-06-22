import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  
});
