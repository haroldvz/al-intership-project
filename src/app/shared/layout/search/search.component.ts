import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TdSearchBoxComponent } from '@covalent/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
// Observable class extensions
import 'rxjs/add/observable/of';
import { ResponseSearchDescriptor } from '../../types/search/search-response.type';

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

  search_results = [];


  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Fllorida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];


  //material search
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  //covalent search
  @ViewChild('searchInput') searchBar: TdSearchBoxComponent;

  searchInputTerm = new Subject<string>();

  data: ResponseSearchDescriptor = new ResponseSearchDescriptor();

  constructor(private _search_service: SearchService,
    public router: Router) {

    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice(0, 3))
      );

  }

  ngOnInit() {

  }
  handleKeydown(evt: any) {
    console.log(evt);
  }

  itemSelected(evt: any) {
    console.log(evt.value);
    this.router.navigate(['/movie/', 351286]);
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  clear() {
    this.searchBar.value = '';
    this.searchInputTerm.next('');
    if (this.searchBar.searchVisible) {
      this.searchBar.toggleVisibility();
    }
  }

  search(event: string): void {
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

  keyEnterPress() {
    const query = this.searchBar.value;
    console.log(query);
  }

  focusOut() {
    this.searchInputTerm.next('');
  }

}
