import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


const testRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 /* {
    path: 'home',
    component: HomeComponent
  },*/
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes(testRoutes),
        SharedModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,                        
      ],
  
    }).compileComponents();
  }));
  it('should create the app CornTime', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'CornTime'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CornTime');
  }));
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to tmdb-project!');
  }));*/
});
