import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieReviewsComponent } from './serie-reviews.component';

describe('SerieReviewsComponent', () => {
  let component: SerieReviewsComponent;
  let fixture: ComponentFixture<SerieReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
