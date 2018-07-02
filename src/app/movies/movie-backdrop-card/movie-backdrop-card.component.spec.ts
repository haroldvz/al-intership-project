import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBackdropCardComponent } from './movie-backdrop-card.component';

describe('MovieBackdropCardComponent', () => {
  let component: MovieBackdropCardComponent;
  let fixture: ComponentFixture<MovieBackdropCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBackdropCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBackdropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
