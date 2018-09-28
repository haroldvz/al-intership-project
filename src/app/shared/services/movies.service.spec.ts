import { async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { MovieService } from "./movie.service";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";
import { of } from "rxjs";
import { movies } from "../../../testing/models/movies";
import { ResponseDescriptor } from "../types/movies/response.type";



describe('Movie service',()=>{
    
    let httpClientSpy: {get: jasmine.Spy};
    let api_service: ApiService;
    let movie_service: MovieService;
    let httpClient: HttpClient;
    let httpmock: HttpTestingController;

    beforeEach(()=>{

        //httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
        //api_service = new ApiService(<any>httpClientSpy);

        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                MovieService,ApiService
            ],
        });

        httpClient = TestBed.get(HttpClient);
        httpmock = TestBed.get(HttpTestingController);
        movie_service = TestBed.get(MovieService);
        api_service = TestBed.get(ApiService);
    
    });


    describe('When getTopRatedMovies is called',()=>{

        
        it('should return a response from API (Observable)',async(()=>{

            spyOn(api_service,'get').and.returnValue(of(movies));
            movie_service.getTopRatedMovies(1).subscribe((data)=>{
               expect(data).toEqual(ResponseDescriptor.import(movies));
            });
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/top_rated','&page=1');
            //const req = httpmock.expectOne('/movie/top_rated','&page=1');
            //expect(req.request.method).toEqual('GET');

        }));


    });


});