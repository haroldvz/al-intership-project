import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import { TdSearchBoxComponent } from '@covalent/core';
import { ResponseSearchDescriptor } from '../../types/search/search-response.type';
import { SearchService } from '../../services/search.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  //covalent search
  @ViewChild('searchInput') searchBar: TdSearchBoxComponent;

  searchInputTerm = new Subject<string>();

  data: ResponseSearchDescriptor = new ResponseSearchDescriptor();

  constructor(private _search_service: SearchService,
    private _router: Router) {
  }

  ngOnInit() {

  }

  /**
   *
   *
   * @memberof SearchComponent
   */
  clear() {
    this.searchBar.value = '';
    this.searchInputTerm.next('');
    if (this.searchBar.searchVisible) {
      this.searchBar.toggleVisibility();
    }
  }

  /**
   *
   * listen the event emitted after the [debounce] timeout. 
   * @param {string} event
   * @memberof SearchComponent
   */
  search(event: string): void {
    this.query = event;
    console.log(event)
    this.searchInputTerm.next(event);
    if (event != null && event != '') {
      this._search_service.multiSearch(1, event).subscribe(
        (data) => {

          this.data = data;
          this.data.results.sort(this.predicateBy("popularity"))
          console.log(this.data);
        }
      );

    } else {
      this.data.results = []
    }

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

  /**
   *
   * Listen the event when the enter key is press,
   * go to search page component with the input query
   * @memberof SearchComponent
   */
  keyEnterPress() {
    const query:string = this.searchBar.value;
    this.clear();
    this._router.navigate(['/search/', query, { 'page': 1 }]);
  }

  /**
   *
   *
   * @memberof SearchComponent
   */
  focusOut() {
    this.searchInputTerm.next('');
  }

}
