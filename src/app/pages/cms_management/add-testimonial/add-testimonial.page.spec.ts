import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestimonialPage } from './add-testimonial.page';

describe('AddTestimonialPage', () => {
  let component: AddTestimonialPage;
  let fixture: ComponentFixture<AddTestimonialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestimonialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestimonialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
