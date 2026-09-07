import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMain } from './master-main';

describe('MasterMain', () => {
  let component: MasterMain;
  let fixture: ComponentFixture<MasterMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterMain],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
