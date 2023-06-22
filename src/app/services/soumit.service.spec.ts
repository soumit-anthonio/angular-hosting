import { TestBed } from '@angular/core/testing';

import { SoumitService } from './soumit.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseModule } from '@angular/fire/database';
import { SoumitBaseService } from './soumitbaseservice';
import { ProductComponent } from '../my-components/product/product.component';

describe('SoumitService', () => {
  let service: SoumitService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,DatabaseModule],
      providers: [SoumitService,SoumitBaseService,{ provide: ProductComponent, useValue: {}}],
    });
    service = TestBed.get(SoumitService);
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
