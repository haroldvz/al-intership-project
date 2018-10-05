import { ApiService } from "./api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async } from "@angular/core/testing";
import { movies } from "../../../testing/models/movies";
import { asyncData, asyncError } from "../../../testing/async-observable-helpers";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Router, Routes } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ErrorComponent } from "../components/error/error.component";
import { error_test_interface } from "../../../testing/errors/error-interface";

const testRoutes: Routes = [
    {
        path: 'error',
        component: ErrorComponent
    },
];

describe('API service', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let api_service: ApiService;
    let route: Router;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(testRoutes),
            ],
            providers: [
                ApiService
            ],
        });

        route = TestBed.get(Router);
        api_service = TestBed.get(ApiService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        api_service = new ApiService(<any>httpClientSpy, route);


    });


    it('should return expected movie (HttpClient called once)', () => {
        httpClientSpy.get.and.returnValue(asyncData(movies));
        api_service.get().subscribe((data) => {
            console.log(data);
            expect(data).toEqual(movies);
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });


    it('should return an error when the server returns a 404', () => {

        //Error creation
        const errorResponse = new HttpErrorResponse({
            url: 'https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767&page=q',
            status: 404,
            statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errorResponse));

        api_service.get('urlerrorresponsecalled').subscribe(
            (data) => {
                console.log('data test', data);
                expect(data).toEqual(error_test_interface);
            }
        );
    });
});



/** Test with mocks */
describe('Test with mocks', () => {

    let httpTestingController: HttpTestingController;
    let api_service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            // Import the HttpClient mocking services
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(testRoutes)],
            // Provide the service-under-test
            providers: [ApiService]
        });

        // Inject the http, test controller, and service-under-test
        // as they will be referenced by each test.
        httpTestingController = TestBed.get(HttpTestingController);
        api_service = TestBed.get(ApiService);


    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    describe('When get() function is called', () => {

        beforeEach(() => {
            api_service = TestBed.get(ApiService);

        });

        it('should return expected response (called once) ', async(() => {

            const url = 'https://api.themoviedb.org/3/movies/popular';
            api_service.get(url, '&page=1').subscribe(
                (data) => {
                    console.log('datahttpmock', data);
                    expect(data).toEqual(movies)
                }
            )
            const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767' + '&page=1')
            req.flush(movies);
        }));


        it('should turn 404 into a user-friendly error', async(() => {
            const msg = 'Deliberate 404';
            const url = 'https://api.themoviedb.org/3/movies/popular';
            api_service.get(url, '&page=q').subscribe(
                (data) => {
                    console.log('datamockerror', data);
                    expect(data).toEqual(error_test_interface);
                }
            )
            const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767' + '&page=q')
            req.flush(msg, { status: 404, statusText: 'Not Found' });
        }));


        it('should return expected heroes (called multiple times)', async(() => {

            const url = 'https://api.themoviedb.org/3/movies/popular';
            const args = '&page=1';
            api_service.get(url, args).subscribe();
            api_service.get(url, args).subscribe();
            api_service.get(url, args).subscribe(
                (data) => {
                    console.log('data in multiple times', data);
                    expect(data).toEqual(movies);
                }
            )
            const req = httpTestingController.match('https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767' + '&page=1')
            expect(req.length).toEqual(3, 'calls to get()');
            // Respond to each request with different mock hero results
            req[0].flush([]);
            req[1].flush(movies);
            req[2].flush(movies);
        }));


    });

});