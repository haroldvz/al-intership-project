import { DetailPersonService } from "../../shared/services/detail-person.service";
import { ActivatedRoute } from "@angular/router";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { PersonImagesComponent } from "./person-images.component";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedCovalentModule } from "../../shared/shared-covalent.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { person_images } from "../../../testing/models/person-images";


describe('Person Images Component',()=>{

    let person_detail_service:DetailPersonService;
    let activate_route:ActivatedRoute;
    let param = { id:1 };
    let fixture: ComponentFixture<PersonImagesComponent>;
    let debugElement: DebugElement;
    let person_images_component:PersonImagesComponent;

    beforeEach(async(()=>{

        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [PersonImagesComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                //SharedModule,
                SharedCovalentModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],

            providers: [
                DetailPersonService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
            ],
        }).compileComponents();
    }));


    beforeEach(()=>{
        person_detail_service = TestBed.get(DetailPersonService);
        fixture = TestBed.createComponent(PersonImagesComponent);
        debugElement = fixture.debugElement;
        person_images_component = fixture.componentInstance;
    });



    describe('When ngOnInit is called',()=>{

        it('should set the data attribute correctly',()=>{

            spyOn(person_detail_service,'getPersonImages').and.returnValue(of(person_images));
            person_images_component.ngOnInit();
            expect(person_images_component.data).toEqual(person_images);
            expect(person_detail_service.getPersonImages).toHaveBeenCalledTimes(1);
            expect(person_detail_service.getPersonImages).toHaveBeenCalledWith(1);

        });


    });



});