import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTwoWayParentComponent } from './iotwo-way-parent-component';

describe('IOTwoWayParentComponent', () => {
  let component: IOTwoWayParentComponent;
  let fixture: ComponentFixture<IOTwoWayParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IOTwoWayParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IOTwoWayParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
