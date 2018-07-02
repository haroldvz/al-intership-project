import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesBackdropCardComponent } from './tv-series-backdrop-card.component';

describe('TvSeriesBackdropCardComponent', () => {
  let component: TvSeriesBackdropCardComponent;
  let fixture: ComponentFixture<TvSeriesBackdropCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesBackdropCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesBackdropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
