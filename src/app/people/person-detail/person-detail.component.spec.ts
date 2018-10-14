import { ActivatedRoute, Router } from "@angular/router";
import { DetailPersonService } from "../../shared/services/detail-person.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { PersonDetailComponent } from "./person-detail.component";
import { configureTestSuite } from "../../../testing/configure-testbed.spec";
import { CommonModule } from "@angular/common";
import { SharedCovalentModule } from "../../shared/shared-covalent.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of, Observable } from "rxjs";
import { GetAgePipe } from "../../shared/pipes/calculate-age.pipe";
import { PersonDescriptor } from "../../shared/types/person/detail-person.type";
import { person } from "../../../testing/models/person";

export class mockDetailPersonService extends DetailPersonService{
    getPersonDetail(id:number):Observable<PersonDescriptor> {
        return of(person);
    }
}



describe('Person Detail Component',()=>{


    let people_detail_service: DetailPersonService;
    let active_route:ActivatedRoute;
    let fixture: ComponentFixture<PersonDetailComponent>;
    let debugElement: DebugElement;
    let param = { id: 2 };
    let detail_person_component: PersonDetailComponent;
    let router = {
        navigate: jasmine.createSpy('navigate')
    }

    configureTestSuite();

    beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [PersonDetailComponent,GetAgePipe],
            imports: [
                CommonModule,
                SharedCovalentModule,
                HttpClientTestingModule,
                //RouterTestingModule.withRoutes([]),
                BrowserAnimationsModule,
            ],
            providers: [
                {
                    provide: DetailPersonService, useClass: mockDetailPersonService
                },
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
                {
                    provide: Router, useValue: router
                },
            ],
        });

        await TestBed.compileComponents();
    })().then(done).catch(done.fail));


    beforeEach(()=>{

        router = TestBed.get(Router);
        fixture = TestBed.createComponent(PersonDetailComponent);
        debugElement = fixture.debugElement;
        detail_person_component = fixture.componentInstance;
        people_detail_service = TestBed.get(DetailPersonService);
        active_route = TestBed.get(ActivatedRoute);

    });

    describe('When ngOnInit() is called',()=>{


        it('should set the data attribute with the service response',()=>{

            detail_person_component.ngOnInit();
            expect(detail_person_component.data).toEqual(person);

        });

    });



});
