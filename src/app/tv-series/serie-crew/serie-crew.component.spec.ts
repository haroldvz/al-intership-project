import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCrewComponent } from './serie-crew.component';

describe('SerieCrewComponent', () => {
  let component: SerieCrewComponent;
  let fixture: ComponentFixture<SerieCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
