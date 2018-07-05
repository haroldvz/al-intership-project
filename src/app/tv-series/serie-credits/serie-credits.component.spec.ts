import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCreditsComponent } from './serie-credits.component';

describe('SerieCreditsComponent', () => {
  let component: SerieCreditsComponent;
  let fixture: ComponentFixture<SerieCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
