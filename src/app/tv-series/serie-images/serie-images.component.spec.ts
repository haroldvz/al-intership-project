import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieImagesComponent } from './serie-images.component';

describe('SerieImagesComponent', () => {
  let component: SerieImagesComponent;
  let fixture: ComponentFixture<SerieImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
