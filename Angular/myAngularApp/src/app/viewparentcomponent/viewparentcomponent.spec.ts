import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewparentcomponent } from './viewparentcomponent';

describe('Viewparentcomponent', () => {
  let component: Viewparentcomponent;
  let fixture: ComponentFixture<Viewparentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewparentcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Viewparentcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
