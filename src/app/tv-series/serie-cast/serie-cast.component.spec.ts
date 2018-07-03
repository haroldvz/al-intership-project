import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCastComponent } from './serie-cast.component';

describe('SerieCastComponent', () => {
  let component: SerieCastComponent;
  let fixture: ComponentFixture<SerieCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
