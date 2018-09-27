import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { Router } from "@angular/router";
import { MovieCastComponent } from "./movie-cast.component";
import { HttpTestingController } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";

describe('Movies Cast component',()=>{

    //let movie_service: MovieService;
    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<MovieCastComponent>;
    let location: Location;
    let router: Router;
    let debugElement: DebugElement;
    let movie_cast_component: MovieCastComponent;

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
            /*providers: [
              { provide: MovieService, useValue: UserServiceMock }, { provide: SearchService, useValue: SearchServiceMock }],*/
            providers: [
                MovieService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
                /*{
                    provide: Router, useClass: class {
                        navigate = navigateSpy;
                    }
                },*/
            ],
        }).compileComponents();;
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(MovieCastComponent);
        debugElement = fixture.debugElement;
        movie_cast_component = fixture.componentInstance;
        //movie_service = TestBed.get(MovieService);

    });

    describe('When ngAfterContentInit() is called',()=>{

        it('should set internal attributes (grid) with the correct value',()=>{

            

        });

    });

});