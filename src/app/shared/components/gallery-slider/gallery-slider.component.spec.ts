import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { GallerySliderComponent } from "./gallery-slider.component";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedCovalentModule } from "../../shared-covalent.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { person_images } from "../../../../testing/models/person-images";



describe('Gallery Slider Component (Used in Person detail images)',()=>{

    let gallery_slider_component:GallerySliderComponent;
    let fixture: ComponentFixture<GallerySliderComponent>;
    let debugElement: DebugElement;

    beforeEach(async(()=>{

        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [GallerySliderComponent],
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([]),
                SharedCovalentModule,
                HttpClientTestingModule, BrowserAnimationsModule
            ],
        }).compileComponents();

    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(GallerySliderComponent);
        debugElement = fixture.debugElement;
        gallery_slider_component = fixture.componentInstance;
        gallery_slider_component.data = person_images;
    });


    describe('When ngOnInit is called',()=>{
        it('should set the data correctly',()=>{
            gallery_slider_component.ngOnInit();
            expect(gallery_slider_component.data).toEqual(person_images);
            expect(gallery_slider_component.items.length).toEqual(1);
        });
    });


});