import { Component, OnInit, Input } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core/data-table';
import { IPageChangeEvent } from '@covalent/core/paging';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseSearchDescriptor } from '../../types/search/search-response.type';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  @Input() public query_data;
  data: ResponseSearchDescriptor = new ResponseSearchDescriptor();

  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'name', label: 'name', width: { min: 300, max: 450 } },
    { name: 'date', label: 'date', width: 150 },
    { name: 'popularity', label: 'popularity', width: 150 },
    { name: 'img', label: '', width: 100 },
  ];

  query_input;

  routerSubscribe;

  searchCtrl: FormControl;
  searchValueChages: Observable<string>;

  basicData: any[] = [



  ]

  query_to_show:string;

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

  ngOnInit() {



    if (this.searchCtrl.value == null) {

      

      this.routerSubscribe = this.route.params.subscribe(params => {
        //this.LoadingRegister();
        let query: string = params['query'];
        
        console.log(query);

        this._search_service.multiSearch(1, query).subscribe(
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

            console.log("dataasdasdas");
            console.log(this.data);
          }
        );

      });

    } 

      this.searchValueChages.subscribe(
        () => {
          this.updateResults();
        }
      );

  

  }

  updateResults() {



    if (this.searchCtrl.value != "" && this.searchCtrl.value != null) {

      this.query_to_show = this.searchCtrl.value;

      this._search_service.multiSearch(1, this.searchCtrl.value).subscribe(
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

          console.log("dataasdasdas");
          console.log(this.data);
        }
      );

    }



  }

  getResults() {
    console.log(this.query_input);
  }

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
    //console.log(event);
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
