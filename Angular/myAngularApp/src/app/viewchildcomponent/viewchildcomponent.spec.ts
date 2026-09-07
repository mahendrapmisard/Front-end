import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchildcomponent } from './viewchildcomponent';

describe('Viewchildcomponent', () => {
  let component: Viewchildcomponent;
  let fixture: ComponentFixture<Viewchildcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewchildcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Viewchildcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
