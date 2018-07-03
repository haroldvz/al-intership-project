import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieBackdropCardComponent } from './serie-backdrop-card.component';

describe('SerieBackdropCardComponent', () => {
  let component: SerieBackdropCardComponent;
  let fixture: ComponentFixture<SerieBackdropCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieBackdropCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieBackdropCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
