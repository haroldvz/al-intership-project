import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewBiographyComponent } from './dialog-overview-biography.component';

describe('DialogOverviewBiographyComponent', () => {
  let component: DialogOverviewBiographyComponent;
  let fixture: ComponentFixture<DialogOverviewBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
