import { PeopleService } from "../../shared/services/people.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListPeopleComponent } from "./list-people.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { configureTestSuite } from "../../../testing/configure-testbed.spec";
import { SharedCovalentModule } from "../../shared/shared-covalent.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { people } from "../../../testing/models/people";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



describe('List People Component', () => {

    let people_service: PeopleService;
    let active_route:ActivatedRoute;
    let fixture: ComponentFixture<ListPeopleComponent>;
    let debugElement: DebugElement;
    let param = { category: 'popular', page: 2 };
    let list_people_component: ListPeopleComponent;
    let router = {
        navigate: jasmine.createSpy('navigate')
    }

    configureTestSuite();

    beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [ListPeopleComponent],
            imports: [
                CommonModule,
                SharedCovalentModule,
                HttpClientTestingModule,
                //RouterTestingModule.withRoutes([]),
                BrowserAnimationsModule,
            ],
            providers: [
                PeopleService,
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


    beforeEach(() => {
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(ListPeopleComponent);
        debugElement = fixture.debugElement;
        list_people_component = fixture.componentInstance;
        people_service = TestBed.get(PeopleService);
        active_route = TestBed.get(ActivatedRoute);
    });

    afterEach(()=>{
        active_route.params = of({ category: 'popular', page: 2});
    })

    describe('When the component is created', () => {

        it('should set correctly attributes', () => {

            //Undefined
            expect(list_people_component._actual_category).toBeUndefined();
            expect(list_people_component._actual_page).toBeUndefined();
            expect(list_people_component._total_pages).toBeUndefined();
            expect(list_people_component._total_results).toBeUndefined();

            //Defined
            expect(list_people_component.data).toBeDefined();

        });

    });

    describe('When ngOnInit() is called', () => {

        it('should set the _actual_page and _actual_category correctly (depends of params)', () => {

            spyOn(list_people_component, 'getPeople').and.callThrough();
            list_people_component.ngOnInit();
            expect(list_people_component._actual_category).toEqual('popular');
            expect(list_people_component._actual_page).toEqual(2);
            expect(list_people_component.getPeople).toHaveBeenCalledTimes(1);

        });

        it('should set the _actual_page and _actual_category correctly (depends of params)', () => {

            active_route.params = of({ category: 'popular'});

            spyOn(list_people_component, 'getPeople').and.callThrough();
            list_people_component.ngOnInit();
            expect(list_people_component._actual_category).toEqual('popular');
            expect(list_people_component._actual_page).toEqual(1);
            expect(list_people_component.getPeople).toHaveBeenCalledTimes(1);

        });


    });


    describe('When getPeople() is called',()=>{

        let spy:any;

        beforeEach(()=>{
            fixture.detectChanges();
            spy = spyOn(people_service,'getPopularPeople').and.returnValue(of(people));
        })

        it('should set the data, _total_results and _total_pages correctly',()=>{


            list_people_component.getPeople();

            expect(list_people_component.data).toEqual(people);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(2);

        });

        it('should set the data, _total_results and _total_pages correctly',()=>{

            list_people_component._actual_category = 'invalid';
            list_people_component.getPeople();
            
            expect(router.navigate).toHaveBeenCalledWith(['/404-not-found/']);

        });

    });




});