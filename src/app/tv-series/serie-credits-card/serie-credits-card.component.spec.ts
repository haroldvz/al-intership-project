import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCreditsCardComponent } from './serie-credits-card.component';

describe('SerieCreditsCardComponent', () => {
  let component: SerieCreditsCardComponent;
  let fixture: ComponentFixture<SerieCreditsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCreditsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCreditsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
