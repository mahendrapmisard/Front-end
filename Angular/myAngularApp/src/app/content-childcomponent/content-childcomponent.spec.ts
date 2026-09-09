import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildcomponent } from './content-childcomponent';

describe('ContentChildcomponent', () => {
  let component: ContentChildcomponent;
  let fixture: ComponentFixture<ContentChildcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentChildcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
