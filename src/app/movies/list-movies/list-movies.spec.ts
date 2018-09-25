import { ListMoviesComponent } from "./list-movies.component";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieService } from "../../shared/services/movie.service";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { Router, Routes, ActivatedRoute, Params } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "../../shared/components/home/home.component";
import { Location } from '@angular/common'; //Fix error (Null provider for location)
import { of } from "rxjs";
import { ActivatedRouteStub } from "../../../testing/activated-route-stub";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { movies } from "../../../testing/models/movies";


const testRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {//this route have to exists, if not, show error (ERROR: 'Unhandled Promise rejection:', 'Cannot match any routes. URL Segment:)
        path: 'movies/:category',
        component: ListMoviesComponent
    },
  ];

//Spies
const navigateSpy = jasmine.createSpy('navigate');


describe('List Movies Component', () => {

    let movie_service: MovieService;
    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<ListMoviesComponent>;
    let location: Location;
    let router: Router;
    let debugElement: DebugElement;
    let param = { category: 'top-rated', page:1 };
    let movies_component: ListMoviesComponent;

    //let params: Subject<Params>;

    let activateRoute = new ActivatedRouteStub({ category: 'popular', page:1 });

    //beforeEach(() => activateRoute.setParamMap({ category: 'popular', page:1 }));

    beforeEach(async(() => {
        //params = new Subject<Params>();
        //params.next({ 'category': 'popular', 'page':1 });
    
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [ListMoviesComponent],
            imports: [
                CommonModule, 
                RouterTestingModule,
                SharedModule,
                HttpClientTestingModule,BrowserAnimationsModule
            ],
            /*providers: [
              { provide: MovieService, useValue: UserServiceMock }, { provide: SearchService, useValue: SearchServiceMock }],*/
            providers: [
                MovieService,
                {
                    provide: ActivatedRoute, useValue: {
                        params:of(param)
                    }
                },
                {
                    provide: Router, useClass: class {
                      navigate = navigateSpy;
                    }
                },
            ],
        }).compileComponents();;
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(ListMoviesComponent);
        debugElement = fixture.debugElement;
        movies_component = fixture.componentInstance;
        movie_service = TestBed.get(MovieService);
    });

    afterEach(() => {
        movies_component.ngOnDestroy();
     });

    it('should create an instance', () => {
        expect(movies_component).toBeTruthy();
    });

    describe('When the component is created', () => {
        it('should create the global variables', () => {
          expect(movies_component.total_results)
            .toBeUndefined();
          expect(movies_component._actual_page)
            .toBeUndefined();
          expect(movies_component._actual_category)
            .toBeUndefined();
          expect(movies_component.data)
            .toBeDefined();
        });
      });
    

    describe('ngOnInit()',()=>{

        beforeEach(()=>{
            
            
        });

        describe('When ngOnInit is called',()=>{
            it('should set default params (category: popular and page:1) if the category or page are invalid params', async(() => {
                const category = 'invalid-category';
                const page = -8;
                movies_component.route.params =  of({ category: category, page: page });
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toEqual('popular');
                expect(movies_component._actual_page).toEqual(1);
            }));

            it('should read the params and set variables category and page', async(() => {
                const category = 'now-playing';
                const page = 1;
                movies_component.route.params =  of({ category: category, page: page });
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toEqual(category);
                expect(movies_component._actual_page).toEqual(page);
            }));
            it('should set the category with the param value (top-rated) [value from providers in testbed config]', async(() => {
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toBe('top-rated');
                expect(movies_component._actual_page).toBe(1);
               
            }));

            it('should call the functions', async(() => {
                spyOn(movies_component,'LoadingRegister');
                spyOn(movies_component,'getMovies');
                movies_component.ngOnInit();
                expect(movies_component.LoadingRegister).toHaveBeenCalledTimes(1);
                expect(movies_component.getMovies).toHaveBeenCalledTimes(1);
               
            }));
        });
    });


    describe('When getMovies is called',()=>{

        beforeEach(()=>{

        });

        it('should call movie service when the category is popular', () => {

            spyOn(movie_service,'getPopularMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'popular';
            movies_component.getMovies();
            console.log(movies_component.data);
            expect(movie_service.getPopularMovies)
              .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);
           
          });


          it('should call movie service when the category is top-rated', () => {

            spyOn(movie_service,'getTopRatedMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'top-rated';
            movies_component.getMovies();
            console.log(movies_component.data);
            expect(movie_service.getTopRatedMovies)
              .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);
            expect(movies_component._total_pages).toEqual(movies.total_pages);
           
          });


          it('should call movie service (getPopularmovies) when the category is invalid', () => {

            spyOn(movie_service,'getPopularMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'invalidcategoryy';
            movies_component.getMovies();
            console.log(movies_component.data);
            expect(movie_service.getPopularMovies)
              .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);
           
          });


    });
});
