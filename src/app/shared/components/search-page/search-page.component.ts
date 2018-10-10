import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core/data-table';
import { IPageChangeEvent, TdPagingBarComponent } from '@covalent/core/paging';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseSearchDescriptor } from '../../types/search/search-response.type';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  @Input() public query_data;

  /**
   * Data  of search page component
   */
  data: ResponseSearchDescriptor = new ResponseSearchDescriptor();

  /**
   * View child of search page component
   */
  @ViewChild('pagingSearchBar') pagingSearchBar: TdPagingBarComponent;

  /**
   * Config width columns of search page component
   */
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'name', label: 'name', width: { min: 300, max: 450 } },
    { name: 'date', label: 'date', width: 150 },
    { name: 'popularity', label: 'popularity', width: 150 },
    { name: 'img', label: '', width: 100 },
  ];

  /**
   * Query of search page component
   */
  query:string;
  /**
   * Router subscribe of search page component
   */
  routerSubscribe;
  /**
   * Search ctrl of search page component
   */
  searchCtrl: FormControl;
  /**
   * Search value chages of search page component
   */
  searchValueChages: Observable<string>;
  /**
   * Basic data of search page component
   */
  basicData: any[] = [];
  /**
   * Query to show of search page component
   */
  query_to_show: string = 'Search query';


  /**
   * Total results of search page component
   */
  _total_results: number = 0;
  /**
   * Actual page of search page component
   */
  _actual_page: number = 1;
  /**
   * Total pages of search page component
   */
  _total_pages: number = 0;


  /**
   * Creates an instance of search page component.
   * @param _search_service 
   * @param route 
   * @param _router 
   */
  constructor(private _search_service: SearchService,
    private route: ActivatedRoute,
    private _router: Router) {
    this.searchCtrl = new FormControl();
    this.searchValueChages = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(800),
      distinctUntilChanged());
    //this.searchCtrl.setValue('Search here...');
  }

  /**
   *
   *
   * @memberof SearchPageComponent
   */
  ngOnInit() {


    if (this.searchCtrl.value == null) {
      this.routerSubscribe = this.route.params.subscribe(params => {
        //this.LoadingRegister();
        if (params['page']) {
          let page: number = +params['page'];
          this._actual_page = page;
        } 

        let query: string = params['query'];
        this.query = query;
        this.getResults(this.query);

      });

    }

    //--
    this.searchValueChages.subscribe(
      () => {
        this.pagingSearchBar.navigateToPage(1);
        this._actual_page = 1;
        this.updateResults();
        this._router.navigate(['/search/', this.query, { 'page': this._actual_page }]);
      }
    );
    //--

  }


  /**
   *
   *
   * @param {string} query
   * @memberof SearchPageComponent
   */
  getResults(query: string) {

    this.query_to_show = query;
    this.query = query;
    this.pagingSearchBar.navigateToPage(this._actual_page);
    this._search_service.multiSearch(this._actual_page, query).subscribe(
      (data) => {
        this.data = data;

        this._total_results = data.total_results;
        this._total_pages = data.total_pages;

        this.data.results.sort(this.predicateBy("popularity"))
        for (let i = 0; i < this.data.results.length; i++) {
          let name: string = '';
          if (data.results[i].name != "") {
            name = data.results[i].name;
          } else if (data.results[i].title != "") {
            name = data.results[i].title;
          }
          this.basicData.push(
            {
              "id": this.data.results[i].id,
              "name": name,
              "popularity": this.data.results[i].popularity,
              "img": "https://robohash.org/ullamquaedeleniti.png?size=50x50&set=set1",
              "date": this.data.results[i].release_date,
              "media_type": this.data.results[i].media_type,

            }
          );
        }

      }
    );

  }


  /**
   *
   *
   * @memberof SearchPageComponent
   */
  updateResults() {

    if (this.searchCtrl.value != "" && this.searchCtrl.value != null) {
      this.query_to_show = this.searchCtrl.value;
      this.query = this.searchCtrl.value;
      this._search_service.multiSearch(this._actual_page, this.searchCtrl.value).subscribe(
        (data) => {
          this.data = data;
          this.data.results.sort(this.predicateBy("popularity"))
          for (let i = 0; i < this.data.results.length; i++) {
            let name: string = '';
            if (data.results[i].name != "") {
              name = data.results[i].name;
            } else if (data.results[i].title != "") {
              name = data.results[i].title;
            }
            this.basicData.push(
              {
                "id": this.data.results[i].id,
                "name": name,
                "popularity": this.data.results[i].popularity,
                "img": "https://robohash.org/ullamquaedeleniti.png?size=50x50&set=set1",
                "date": this.data.results[i].release_date,
                "media_type": this.data.results[i].media_type,
              }
            );
          }
        }
      );
    }
  }


  /**
   * Listen the page change and navigate to the corresponding route
   *
   * @param {IPageChangeEvent} event
   * @memberof ListMoviesComponent
   */
  changeOfPage(event: IPageChangeEvent): void {

    this._actual_page = event.page;
    //console.log(this._actual_page);
    window.scroll(0, 0);
    document.body.scrollTop = 0;
    document.querySelector('body').scrollTo(0, 0);
    this._router.navigate(['/search/', this.query_to_show, { 'page': this._actual_page }]);

  }

  /**
   * Go to respective route depends of the media type
   *
   * @param {*} event
   * @memberof SearchPageComponent
   */
  goToTarget(event: any): void {
    let id = event.row.id;
    let media_type = event.row.media_type;
    let route: string = ""
    if (media_type == "tv") {
      route = "/tv-detail/"
    } else if (media_type == "person") {
      route = "/person/"
    } else if (media_type == "movie") {
      route = "/movie/"
    }
    this._router.navigate([route, id]);
  }

  /**
   *
   *
   * @param {*} prop
   * @returns
   * @memberof SearchComponent
   */
  predicateBy(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    }
  }

}
