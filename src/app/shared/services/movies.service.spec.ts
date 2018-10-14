import { async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MovieService } from "./movie.service";
import { ApiService } from "./api.service";
import { of } from "rxjs";
import { movies } from "../../../testing/models/movies";
import { ResponseDescriptor } from "../types/movies/response.type";
import { movie_credits } from "../../../testing/models/movie_credits";
import { CreditsDescriptor } from "../types/movies/credits.type";
import { RouterTestingModule } from "@angular/router/testing";



describe('Movie service', () => {

    let api_service: ApiService;
    let movie_service: MovieService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                MovieService, ApiService
            ],
        });

        movie_service = TestBed.get(MovieService);
        api_service = TestBed.get(ApiService);

    });


    describe('When getTopRatedMovies is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            movie_service.getTopRatedMovies(1).subscribe((data) => {
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/top_rated', '&page=1');

        }));
    });




    describe('When getPopularMovies is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            movie_service.getPopularMovies(1).subscribe((data) => {
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/popular', '&page=1');

        }));
    });


    describe('When getNowPlayingMovies is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            movie_service.getNowPlayingMovies(1).subscribe((data) => {
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing', '&page=1');

        }));
    });


    describe('When getLatestMovies is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            movie_service.getLatestMovies(1).subscribe((data) => {
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/latest', '&page=1');

        }));
    });


    describe('When getUpcomingMovies is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            movie_service.getUpcomingMovies(1).subscribe((data) => {
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/upcoming', '&page=1');

        }));
    });


    describe('When getMovieCredits is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movie_credits));

            //Call function
            movie_service.getMovieCredits(238).subscribe((data) => {
                //Expect
                expect(data).toEqual(CreditsDescriptor.import(movie_credits));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/238/credits', '');

        }));
    });

});