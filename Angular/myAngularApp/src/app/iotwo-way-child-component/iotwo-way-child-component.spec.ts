import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTwoWayChildComponent } from './iotwo-way-child-component';

describe('IOTwoWayChildComponent', () => {
  let component: IOTwoWayChildComponent;
  let fixture: ComponentFixture<IOTwoWayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IOTwoWayChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IOTwoWayChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
