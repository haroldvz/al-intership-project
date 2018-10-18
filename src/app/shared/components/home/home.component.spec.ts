import { HomeComponent } from "./home.component";
import { MovieService } from "../../services/movie.service";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedCovalentModule } from "../../shared-covalent.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { movies } from "../../../../testing/models/movies";



describe('Home Component',()=>{

    let home_component:HomeComponent;
    let movie_service: MovieService;
    let fixture: ComponentFixture<HomeComponent>;
    let debugElement: DebugElement;
   

    //Main setUp
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [HomeComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                SharedCovalentModule,
                HttpClientTestingModule, 
                BrowserAnimationsModule
            ],

            providers: [
                MovieService,
            ],
        }).compileComponents();


    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        debugElement = fixture.debugElement;
        home_component = fixture.componentInstance;
        movie_service = TestBed.get(MovieService);
    });
    //End main setUp



    describe('When ngOnInit is called',()=>{


        it('should set the attributes data, imageUrls and upcoming_movies correctly',()=>{

            spyOn(movie_service,'getUpcomingMovies').and.returnValue(of(movies));
            home_component.ngOnInit();
            expect(home_component.upcoming_movies).toEqual(movies);
            expect(movie_service.getUpcomingMovies).toHaveBeenCalledTimes(1);
            expect(movie_service.getUpcomingMovies).toHaveBeenCalledWith(1);
            


        });


    });

});