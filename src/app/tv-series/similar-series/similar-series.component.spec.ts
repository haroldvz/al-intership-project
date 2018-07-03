import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarSeriesComponent } from './similar-series.component';

describe('SimilarSeriesComponent', () => {
  let component: SimilarSeriesComponent;
  let fixture: ComponentFixture<SimilarSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
