import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieVideosComponent } from './serie-videos.component';

describe('SerieVideosComponent', () => {
  let component: SerieVideosComponent;
  let fixture: ComponentFixture<SerieVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
