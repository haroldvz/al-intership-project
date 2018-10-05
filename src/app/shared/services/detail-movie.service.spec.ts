import { DetailMovieService } from "./detail-movie.service";
import { ApiService } from "./api.service";
import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { MovieDescriptor } from "../types/movies/detail-movie.type";
import { movie_detail } from "../../../testing/models/movie-detail";
import { ResponseDescriptor } from "../types/movies/response.type";
import { movies } from "../../../testing/models/movies";
import { movie_images } from "../../../testing/models/movie-images";
import { ImagesMoviesDescriptor } from "../types/movies/images.type";


describe('Detail movie service', () => {

    let api_service: ApiService;
    let detail_movie_service: DetailMovieService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                DetailMovieService, ApiService
            ],
        });

        detail_movie_service = TestBed.get(DetailMovieService);
        api_service = TestBed.get(ApiService);

    });


    describe('When getMovieDetail() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movie_detail));

            //Call function
            const id_movie = 1;
            detail_movie_service.getMovieDetail(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(MovieDescriptor.import(movie_detail));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/' + id_movie, '&append_to_response=videos,reviews');

        }));
    });


    describe('When getSimilarMovies() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movies));

            //Call function
            const id_movie = 1;
            detail_movie_service.getSimilarMovies(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(ResponseDescriptor.import(movies));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/' + id_movie + '/similar', '');

        }));
    });



    describe('When getMovieImages() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(movie_images));

            //Call function
            const id_movie = 1;
            detail_movie_service.getMovieImages(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(ImagesMoviesDescriptor.import(movie_images));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/'+id_movie+'/images', '');

        }));
    });


});