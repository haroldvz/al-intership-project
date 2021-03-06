import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Router } from "@angular/router";
import { MovieCastComponent } from "./movie-cast.component";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "../../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovieService } from "../../shared/services/movie.service";
import { ObservableMedia } from "@angular/flex-layout";
import { TdMediaService } from "@covalent/core";
import { shallow } from './../../../testing/enzyme';
import { configureTestSuite } from "../../../testing/configure-testbed.spec";


describe('Movies Cast component',()=>{

    //let movie_service: MovieService;
    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<MovieCastComponent>;
    let router: Router;
    let debugElement: DebugElement;
    let movie_cast_component: MovieCastComponent;

    configureTestSuite();

    beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
            declarations: [MovieCastComponent],
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
    })().then(done).catch(done.fail));

    /*
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [MovieCastComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                SharedModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
           
            providers: [
                MovieService,
            ],
        }).compileComponents();;
    }));*/

    beforeEach(() => {
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(MovieCastComponent);
        debugElement = fixture.debugElement;
        movie_cast_component = fixture.componentInstance;
        //movie_service = TestBed.get(MovieService);

    });
    it('should create the variables and constants',()=>{

        expect(movie_cast_component.grid).toBeDefined();
        expect(movie_cast_component.gridByBreakpoint).toBeDefined();
        expect(movie_cast_component.data).toBeDefined();

    });

    describe('When ngAfterContentInit() is called',()=>{



        it('should set internal attributes (grid) with the correct value',async(()=>{

            //movie_cast_component.ngAfterContentInit();
            console.log(movie_cast_component.grid.cols);

        }));

    });

});