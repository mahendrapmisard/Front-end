import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputParentComponent } from './output-parent-component';

describe('OutputParentComponent', () => {
  let component: OutputParentComponent;
  let fixture: ComponentFixture<OutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
