
import { ListMoviesComponent } from "./list-movies.component";
import { async, tick, fakeAsync } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieService } from "../../shared/services/movie.service";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { Location } from '@angular/common'; //Fix error (Null provider for location)
import { of } from "rxjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { movies } from "../../../testing/models/movies";
import { By } from "@angular/platform-browser";
import { MatSelectChange, MatSelect } from "@angular/material";
import { IPageChangeEvent } from "@covalent/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { configureTestSuite } from "../../../testing/configure-testbed.spec";

/*
const testRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {//this route have to exists, if not, show error (ERROR: 'Unhandled Promise rejection:', 'Cannot match any routes. URL Segment:)
        path: 'movies/:category',
        component: ListMoviesComponent
    },
    
];*/

describe('List Movies Component', () => {

    let movie_service: MovieService;
    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<ListMoviesComponent>;
    let location: Location;
    let router: Router;
    let debugElement: DebugElement;
    let param = { category: 'top-rated', page: 1 };
    let movies_component: ListMoviesComponent;
    let navigateSpy: any;

    /*
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [ListMoviesComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                SharedModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
            providers: [
                MovieService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
            ],
        }).compileComponents();;
    }));*/

    configureTestSuite();

    beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            declarations: [ListMoviesComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                SharedModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
            providers: [
                MovieService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
            ],
        });

        await TestBed.compileComponents();
    })().then(done).catch(done.fail));

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(ListMoviesComponent);
        debugElement = fixture.debugElement;
        movies_component = fixture.componentInstance;
        movie_service = TestBed.get(MovieService);
        navigateSpy = spyOn(movies_component._router, 'navigate');

    });



    afterEach(() => {
        movies_component.ngOnDestroy();
        navigateSpy.calls.reset();
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



    describe('ngOnInit()', () => {

        beforeEach(() => {
            navigateSpy.calls.reset();
        });

        describe('When ngOnInit is called', () => {
            it('should set the category with the param value (top-rated) [value from providers in testbed config]', fakeAsync(() => {
                movies_component.ngOnInit();
                tick();

                expect(movies_component._actual_category).toBe('top-rated');
                expect(movies_component._actual_page).toBe(1);

            }));
            it('should set default params (category: popular and page:1) if the category is invalid', async(() => {
                const category = 'invalid-category';
                const page = 1;
                movies_component.route.params = of({ category: category, page: page });
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toEqual('popular');
                expect(movies_component._actual_page).toEqual(1);
            }));

            it('should set default params (page:1) if the page not exists', async(() => {
                const category = 'latest';
                movies_component.route.params = of({ category: category });
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toEqual('latest');
                expect(movies_component._actual_page).toEqual(1);
            }));

            it('should read the params and set variables category and page', async(() => {
                const category = 'now-playing';
                const page = 1;
                movies_component.route.params = of({ category: category, page: page });
                movies_component.ngOnInit();
                expect(movies_component._actual_category).toEqual(category);
                expect(movies_component._actual_page).toEqual(page);
            }));


            it('should call the functions', async(() => {
                spyOn(movies_component, 'LoadingRegister');
                spyOn(movies_component, 'getMovies');
                movies_component.ngOnInit();
                expect(movies_component.LoadingRegister).toHaveBeenCalledTimes(1);
                expect(movies_component.getMovies).toHaveBeenCalledTimes(1);

            }));
        });
    });


    describe('When getMovies is called', () => {

        beforeEach(() => {
            navigateSpy.calls.reset();
        });

        it('should call movie service when the category is popular', () => {

            spyOn(movie_service, 'getPopularMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'popular';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getPopularMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);
            expect(movie_service.getPopularMovies).toHaveBeenCalledWith(1);


        });


        it('should call movie service when the category is top-rated', async(() => {

            //Spies
            spyOn(movie_service, 'getTopRatedMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'top-rated';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getTopRatedMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);
            expect(movies_component._total_pages).toEqual(movies.total_pages);

        }));


        it('should call movie service (getPopularmovies) when the category is invalid', () => {

            //Spies
            spyOn(movie_service, 'getPopularMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'invalidcategoryy';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getPopularMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);

        });


        it('should call movie service (getLatestMovies) when the category is valid (latest)', () => {

            //Spies
            spyOn(movie_service, 'getLatestMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'latest';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getLatestMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);

        });


        it('should call movie service (getLatestMovies) when the category is valid (now-playing)', () => {

            //Spies
            spyOn(movie_service, 'getNowPlayingMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'now-playing';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getNowPlayingMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);

        });


        it('should call movie service (getUpcomingMovies) when the category is valid (upcoming)', () => {

            //Spies
            spyOn(movie_service, 'getUpcomingMovies').and.returnValue(of(movies));

            let page = 1;
            movies_component._actual_page = page;
            movies_component._actual_category = 'upcoming';
            movies_component.getMovies();
            //console.log(movies_component.data);
            expect(movie_service.getUpcomingMovies)
                .toHaveBeenCalledTimes(1);
            expect(movies_component.data).toEqual(movies);

        });


    });

    describe('When changeFilter() is called', () => {

        //ngCircleProgressModule

        beforeEach(() => {
            navigateSpy.calls.reset();
        });

        afterEach(() => {
            navigateSpy.calls.reset();
        });

        it('should set the variables and navigate to list movies with the category selected', async(() => {

            //Definitions block
            //Spies
            spyOn(movies_component.pagingMoviesBar, 'navigateToPage').and.callThrough();

            //variables and constants
            let select: MatSelect;
            const selectDebug = fixture.debugElement.query(By.css('mat-select'));
            select = selectDebug.nativeElement;

            const evt = new MatSelectChange(select, 'latest');
            //reset router spy
            navigateSpy.calls.reset();
            //call the function
            movies_component.changeFilter(evt,movies_component.pagingMoviesBar,movies_component._router,'/movies/');
            //movies_component.changeFilter(evt);

            //---Expects----

            //this no because the cangeFilter function changed
            /*expect(movies_component._actual_category).toEqual('latest');
            expect(movies_component._actual_page).toEqual(1);*/

            fixture.whenStable().then(() => {
                //fixture.detectChanges();//if i call this, the category will be top-rated, looks like call the ngOninit with the initial params (top-rated, page 1)
                //Verify spies
                expect(movies_component.pagingMoviesBar.navigateToPage).toHaveBeenCalledTimes(1);
                expect(navigateSpy).toHaveBeenCalledTimes(2);
                expect(navigateSpy).toHaveBeenCalledWith(['/movies/', movies_component._actual_category, { 'page': 1 }]);

            });

        }));
    });


    describe('When changeOfPage() is called', () => {

        beforeEach(() => {
            navigateSpy.calls.reset();
        });

        afterEach(() => {
            navigateSpy.calls.reset();
        });

        it('should set the _actual_page with the value page from event and navigate to the correct URL', () => {
            //fixture.detectChanges();//if I do this, calls navigate !!!, so have to reset spy
            //navigateSpy.calls.reset();
            //Definitions block
            let ipageChangeEvent: IPageChangeEvent;
            ipageChangeEvent = {
                fromRow: 1,
                maxPage: 992,
                page: 1,//the page to redirect
                pageSize: 20,
                toRow: 20,
                total: 19826,
            }
            //Call the function
            movies_component.changeOfPage(ipageChangeEvent);
            //Verify Spies
            expect(navigateSpy).toHaveBeenCalledTimes(1);
            expect(navigateSpy).toHaveBeenCalledWith(['/movies/', movies_component._actual_category, { 'page': 1 }]);
        });

    });
});
