import { ApiService } from "./api.service";
import { DetailPersonService } from "./detail-person.service";
import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PersonDescriptor } from "../types/person/detail-person.type";
import { of } from "rxjs";
import { person } from "../../../testing/models/person";
import { CreditsTVPersonDescriptor } from "../types/person/tv-series-person.type";
import { person_tv_credits } from "../../../testing/models/person-tv-credits";
import { person_movies_credits } from "../../../testing/models/person-movies-credits";
import { CreditsPersonDescriptor } from "../types/person/credits-person.type";
import { ImagesPersonDescriptor } from "../types/person/images-person.type";
import { person_images } from "../../../testing/models/person-images";


describe('Detail person service', () => {

    let api_service: ApiService;
    let detail_person_service : DetailPersonService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                DetailPersonService, ApiService
            ],
        });

        detail_person_service = TestBed.get(DetailPersonService);
        api_service = TestBed.get(ApiService);

    });


    describe('When getPersonDetail() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(person));

            //Call function
            const id_person = 1;
            detail_person_service.getPersonDetail(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(PersonDescriptor.import(person));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/person/' + id_person, '');

        }));
    });


    describe('When getPersonCredits() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(person_movies_credits));

            //Call function
            const id_person = 1;
            detail_person_service.getPersonCredits(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(CreditsPersonDescriptor.import(person_movies_credits));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/person/' + id_person + '/movie_credits', '');

        }));
    });


    describe('When getPersonTVCredits() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(person_tv_credits));

            //Call function
            const id_person = 1;
            detail_person_service.getPersonTVCredits(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(CreditsTVPersonDescriptor.import(person_tv_credits));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/person/' + id_person + '/tv_credits', '');

        }));
    });


    describe('When getPersonImages() is called', () => {

        it('should return a response from API (Observable)', async(() => {

            //Spies
            spyOn(api_service, 'get').and.returnValue(of(person_images));

            //Call function
            const id_person = 1;
            detail_person_service.getPersonImages(1).subscribe((data) => {
                console.log(data);
                //Expect
                expect(data).toEqual(ImagesPersonDescriptor.import(person_images));
            });

            //Expects
            expect(api_service.get).toHaveBeenCalledTimes(1);
            expect(api_service.get).toHaveBeenCalledWith('https://api.themoviedb.org/3/person/' + id_person + '/images', '');

        }));
    });



});