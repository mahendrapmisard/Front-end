import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentParentcomponent } from './content-parentcomponent';

describe('ContentParentcomponent', () => {
  let component: ContentParentcomponent;
  let fixture: ComponentFixture<ContentParentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentParentcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentParentcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
