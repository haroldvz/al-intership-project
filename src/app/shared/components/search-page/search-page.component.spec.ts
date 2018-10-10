import { TestBed, async, ComponentFixture, fakeAsync, tick, discardPeriodicTasks } from "@angular/core/testing";
import { Router, ActivatedRoute, Routes } from "@angular/router";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs";
import { SearchPageComponent } from "./search-page.component";
import { SharedCovalentModule } from "../../shared-covalent.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchService } from "../../services/search.service";

const testRoutes: Routes = [
    {//this route have to exists, if not, show error (ERROR: 'Unhandled Promise rejection:', 'Cannot match any routes. URL Segment:)
        path: 'search/:query',
        component: SearchPageComponent
    },
    
];

describe('Search Page Component', () => {

    let httpmock: HttpTestingController;
    let fixture: ComponentFixture<SearchPageComponent>;
    let router: Router;
    let debugElement: DebugElement;
    let search_page_component: SearchPageComponent;
    let search_service: SearchService;
    let param = { page: 1, query: 'arnold' };

    //configureTestSuite();

    /*beforeAll(done => (async () => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
            declarations: [MovieDetailComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                //SharedModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
            providers: [
                MovieService,ObservableMedia,TdMediaService,
            ],
        });

        await TestBed.compileComponents();
    })().then(done).catch(done.fail));*/


    beforeEach(async(() => {

        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [SearchPageComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes(testRoutes),
                //SharedModule,
                SharedCovalentModule,
                HttpClientTestingModule,
                ReactiveFormsModule//fix No provider for NgControl

            ],

            providers: [
                SearchService,
                {
                    provide: ActivatedRoute, useValue: {
                        params: of(param)
                    }
                },
            ],
        }).compileComponents();;
    }));

    beforeEach(() => {
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(SearchPageComponent);
        debugElement = fixture.debugElement;
        search_page_component = fixture.componentInstance;
        search_service = TestBed.get(SearchService);


    });
    it('should create the variables and constants', () => {

        //To be defined
        expect(search_page_component.data).toBeDefined();
        expect(search_page_component.configWidthColumns).toBeDefined();
        expect(search_page_component.basicData).toBeDefined();
        expect(search_page_component.query_to_show).toBeDefined();
        //
        expect(search_page_component.query_to_show).toEqual('Search query');
        //
        expect(search_page_component._total_results).toBeDefined();
        expect(search_page_component._actual_page).toBeDefined();
        expect(search_page_component._total_pages).toBeDefined();
        //set in constructor
        expect(search_page_component.searchCtrl).toBeDefined();
        expect(search_page_component.searchValueChages).toBeDefined();

        //To be undefined
        expect(search_page_component.routerSubscribe).toBeUndefined();
        expect(search_page_component.query).toBeUndefined();
        
        

    });

    describe('When ngOnInit() is called', () => {

        

        it('should set the _actual_page attribute correctly', () => {

            search_page_component.ngOnInit();
            expect(search_page_component._actual_page).toEqual(param.page);

        });

        describe('When searchValueChages observable is subscribe',()=>{

            it('should set the attributes correctly and navigate to correct url',fakeAsync(()=>{
                spyOn(search_page_component,'updateResults').and.callThrough();
                search_page_component.searchCtrl.setValue('brad');
                
                
                tick();
                search_page_component.ngOnInit();
                search_page_component.searchValueChages = of(search_page_component.searchCtrl.value);
              
                expect(search_page_component._actual_page).toEqual(param.page);
                expect(search_page_component.updateResults).toHaveBeenCalledTimes(1);
                
                discardPeriodicTasks();

            }));

        });
    });

});