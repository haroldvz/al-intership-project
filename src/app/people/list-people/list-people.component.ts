

/**
 * ListPeopleComponent's component class
 *
 * Class that set up the ListPeopleComponent's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

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
  _actual_category: string;
  _actual_page: number;
  _total_results: number;
  _total_pages: number;

  data: ResponsePeopleDescriptor = new ResponsePeopleDescriptor();

  /**
   *Creates an instance of ListPeopleComponent.
   * @param {PeopleService} _people_service
   * @param {ActivatedRoute} route
   * @param {Router} _router
   * @memberof ListPeopleComponent
   */
  constructor(private _people_service: PeopleService,
    private route: ActivatedRoute, private _router: Router, ) { }


  /**
   * Shows the popular people with the correspond page
   *
   * @memberof ListPeopleComponent
   */
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
   * Get popular people  with the correspond page and category,
   * if the category not exits then navigate to 404-not-found component
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
        this._router.navigate(['/404-not-found/']);
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
   * Listen the page change
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
