import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../shared/services/people.service';
import { ResponseTVSeriesDescriptor } from '../../shared/types/tv-series/tv-response.type';
import { TVSerieService } from '../../shared/services/tv-series.service';
import { IPageChangeEvent, TdPagingBarComponent } from '@covalent/core';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.scss']
})
export class ListSeriesComponent implements OnInit {

  private routerSubscribe;
  private _actual_category: string;
  private _actual_page: number;
  private _total_results: number;
  private _total_pages: number;

  @ViewChild('pagingTVBar') pagingTVBar: TdPagingBarComponent;

  data: ResponseTVSeriesDescriptor = new ResponseTVSeriesDescriptor();

  constructor(private _tv_service: TVSerieService,
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

      this.getTVSeries();

    });


  }



  /**
   *
   *
   * @param {*} event
   * @memberof ListSeriesComponent
   */
  changeFilter(event: any) {
    //console.log(event.value);
    this._actual_category = event.value;
    this._actual_page = 1;//go to page 1 in the new list
    this.pagingTVBar.navigateToPage(1);//reset the page in paginator
    this._router.navigate(['/tv/', this._actual_category, { 'page': this._actual_page }]);
  }

  /**
   *
   *
   * @memberof ListSeriesComponent
   */
  getTVSeries() {
    switch (this._actual_category) {

      case 'popular': {

        this._tv_service.getPopularTVSeries(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            console.log(this.data)
            this._total_results = data.total_results;
            this._total_pages = data.total_pages;
            //this.loadingResolve();
          }
        );

      } break;
      case 'top-rated': {

        this._tv_service.getTopRatedTVSeries(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            console.log(this.data)
            this._total_results = data.total_results;
            this._total_pages = data.total_pages;
            //this.loadingResolve();
          }
        );

      } break;
      case 'on-the-air': {

        this._tv_service.getOnAirTVSeries(this._actual_page).subscribe(
          (data) => {
            this.data = data;
            console.log(this.data)
            this._total_results = data.total_results;
            this._total_pages = data.total_pages;
            //this.loadingResolve();
          }
        );

      } break;
      case 'airing-today': {

        this._tv_service.getAiringTodayTVSeries(this._actual_page).subscribe(
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
   * @param {IPageChangeEvent} event
   * @memberof ListSeriesComponent
   */
  changeOfPage(event: IPageChangeEvent): void {
    document.querySelector('body').scrollTo(0, 0);
    event.page > 1000 ? this._actual_page = 999:this._actual_page = event.page;
    this._router.navigate(['/tv/', this._actual_category, { 'page': this._actual_page }]);
  }



}
