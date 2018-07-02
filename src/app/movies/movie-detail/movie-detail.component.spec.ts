import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';

//cada metodo un describe,
//escribir en describe la descripccion general y en el it una descripcion especifica acerca del comportamiento de la prueba
describe('MovieDetailComponent', () => {

  

  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//it por cada caso de prueba
/*
describe("Test for Component", ()=>{

  let component: MovieDetailComponent;

  describe("Test for Component.setupMassEditConfig", ()=>{

    it("SHOULD the params to be equal to ",()=>{
      
      component.accountId = '1'
      component.deploymentId = '1'
      component.items_count = 0
      expect(component.accountId).toEqual('1');
      expect(component.deploymentId).toEqual('1');
      expect(component.items_count).toEqual(0);

    });

  });

  describe("Test for component.onSearch", ()=>{

    it("SHOULD the params to be equal to 0 ",()=>{

      spyOn(component,'loadData');

      component.params.offset = null;
      this.params.search = null;

      component.params.offset = 0;
      this.params.search = true;
      component.onSearch();
      expect(component.params.offset).toEqual(0);
      expect(component.params.search).toEqual(true);
      expect(component.params.search).toEqual(true);
      
    });
  })
})
*/

/*

describe("WHEN onFIlter() is called",()=>{

    it("SHOULD set the params.ofset and params.filter variable",()=>{

      component.params.offset = null
      component.params.filters = null
     
      //cuandi hay subscribe devuelvo un observable
      spyOn(component['_UtulityService'], "getFiltersParams").and.returnValue('myFilters');
      spyOn(component, "loadData")


      component.onFilter(['1','4'])


      expect(component.params.offset).toEqual(0)

      expect(getFiltersParams).toHaveBeenCalled();
      expect(loadData).toHaveBeenCalled();
      expect(getFiltersParams).toHaveBeenCalledWith(['1','4'])
      expect(loadData).toHaveBeenCalledWith('all')


    })

})*/
