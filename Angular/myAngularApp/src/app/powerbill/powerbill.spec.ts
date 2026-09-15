import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbill } from './powerbill';

describe('Powerbill', () => {
  let component: Powerbill;
  let fixture: ComponentFixture<Powerbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Powerbill],
    }).compileComponents();

    fixture = TestBed.createComponent(Powerbill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
