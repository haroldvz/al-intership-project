import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { ResponsePeopleDescriptor } from '../../shared/types/person/response-person.type';



@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  private routerSubscribe;
  data:ResponsePeopleDescriptor = new ResponsePeopleDescriptor();

  constructor(private _people_service:PeopleService,
    private route: ActivatedRoute,) { }

  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {
     

      let category: string = params['category'];
      this._people_service.getPopularPeople(1).subscribe(
        (data) => {
          this.data = data;
          console.log(this.data);
        }
      );

    });



  }

}
