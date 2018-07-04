import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsePeopleDescriptor } from '../../shared/types/person/response-person.type';
import { IPageChangeEvent } from '@covalent/core';



@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  private routerSubscribe;
  public _actual_category: string;
  public _actual_page: number;
  public _total_results: number;
  public _total_pages: number;

  data: ResponsePeopleDescriptor = new ResponsePeopleDescriptor();

  constructor(private _people_service: PeopleService,
    private route: ActivatedRoute, private _router: Router, ) { }

  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {


      let category: string = params['category'];
      this._actual_category = category;
      if (params['page']) {
        this._actual_page = +params['page'];
      } else {
        this._actual_page = 1;
      }

      this.getPeople();

    });



  }

  /**
   *
   *
   * @memberof ListPeopleComponent
   */
  getPeople() {
    switch (this._actual_category) {

      case 'popular': {

        this._people_service.getPopularPeople(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            console.log(this.data)
            this._total_results = data.total_results;
            this._total_pages = data.total_pages;
            //this.loadingResolve();
          }
        );

      } break;
      default: {
        console.log("404");
      } break;


    }
  }


  /**
   *
   *
   * @param {*} event
   * @memberof ListPeopleComponent
   */
  changeFilter(event: any) {
    //console.log(event.value);
    this._actual_category = event.value;
    this._actual_page = 1;//go to page 1 in the new list
    this._router.navigate(['/people/', this._actual_category, { 'page': this._actual_page }]);
  }

  /**
   *
   *
   * @param {IPageChangeEvent} event
   * @memberof ListPeopleComponent
   */
  changeOfPage(event: IPageChangeEvent): void {

    this._actual_page = event.page;
    //console.log(this._actual_page);
    window.scroll(0, 0);
    document.body.scrollTop = 0;
    document.querySelector('body').scrollTo(0, 0);
    this._router.navigate(['/people/', this._actual_category, { 'page': this._actual_page }]);

  }

}
