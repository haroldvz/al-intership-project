import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovieDetailComponent } from "./movie-detail.component";
import { DurationTimePipe } from "../../shared/pipes/duration.pipe";
import { SharedCovalentModule } from "../../shared/shared-covalent.module";
import { of } from "rxjs";
import { DetailMovieService } from "../../shared/services/detail-movie.service";
import { movie_detail } from "../../../testing/models/movie-detail";
import { MovieDescriptor } from "../../shared/types/movies/detail-movie.type";
import { MovieService } from "../../shared/services/movie.service";
import { movie_credits } from "../../../testing/models/movie_credits";


//Test without configureTestSuit hack
//Questions: How to test the tab change component with selectItem? (ngSwitch)

describe('Movie Detail component', () => {

    let movie_service: MovieService;
    let detail_movie_service: DetailMovieService;
    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<MovieDetailComponent>;
    let router: Router;
    let debugElement: DebugElement;
    let movie_detail_component: MovieDetailComponent;
    let param = { id: 1 };

    //configureTestSuite();

    /*beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
            declarations: [MovieDetailComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                //SharedModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
            providers: [
                MovieService,ObservableMedia,TdMediaService,
            ],
        });

        await TestBed.compileComponents();
    })().then(done).catch(done.fail));*/


    beforeEach(async(() => {

        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [MovieDetailComponent, DurationTimePipe],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                //SharedModule,
                SharedCovalentModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],

            providers: [
                DetailMovieService, MovieService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(MovieDetailComponent);
        debugElement = fixture.debugElement;
        movie_detail_component = fixture.componentInstance;
        movie_service = TestBed.get(MovieService);
        detail_movie_service = TestBed.get(DetailMovieService);

    });
    it('should create the variables and constants', () => {

        expect(movie_detail_component.base_img_url_backdrop_path).toBeDefined();
        expect(movie_detail_component.data).toBeDefined();
        expect(movie_detail_component.data_credits).toBeDefined();
        expect(movie_detail_component.items_detail).toBeDefined();
        expect(movie_detail_component.myStyles).toBeDefined();
        expect(movie_detail_component.selected_item).toBeDefined();


        expect(movie_detail_component.routerSubscribe).toBeUndefined();
        expect(movie_detail_component.data_crew).toBeUndefined();
        expect(movie_detail_component.genres).toBeUndefined();

    });

    describe('When ngOnInit() is called', () => {

        it('should set the data with service response', () => {

            let response = MovieDescriptor.import(movie_detail);

            spyOn(detail_movie_service, 'getMovieDetail').and.returnValue(of(response));
            spyOn(movie_service,'getMovieCredits').and.returnValue(of(movie_credits));
            spyOn(movie_detail_component, 'loadingResolve').and.callThrough();

            movie_detail_component.ngOnInit();
           
            expect(movie_detail_component.data).toEqual(response);
            expect(movie_detail_component.data_credits).toEqual(movie_credits);

            expect(detail_movie_service.getMovieDetail).toHaveBeenCalledTimes(1);
            expect(detail_movie_service.getMovieDetail).toHaveBeenCalledWith(1);

            expect(movie_service.getMovieCredits).toHaveBeenCalledTimes(1);
            expect(movie_service.getMovieCredits).toHaveBeenCalledWith(1);

            expect(movie_detail_component.loadingResolve).toHaveBeenCalledTimes(1);

        })
    });


    describe('When setItem() is called', () => {

        it('should set the selected_item variable', () => {
           expect(movie_detail_component.selected_item).toEqual(1);
           movie_detail_component.setItem(5);
           expect(movie_detail_component.selected_item).toEqual(5);

        })




    });

});