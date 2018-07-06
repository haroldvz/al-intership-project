import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiscoverComponent } from './list-discover.component';

describe('ListDiscoverComponent', () => {
  let component: ListDiscoverComponent;
  let fixture: ComponentFixture<ListDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
