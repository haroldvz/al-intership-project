import { Component, OnInit } from '@angular/core';
import { DetailPersonService } from '../../shared/services/detail-person.service';
import { ActivatedRoute } from '@angular/router';
import { CreditsPersonDescriptor } from '../../shared/types/person/credits-person.type';

@Component({
  selector: 'app-person-movies',
  templateUrl: './person-movies.component.html',
  styleUrls: ['./person-movies.component.scss']
})
export class PersonMoviesComponent implements OnInit {

  private routerSubscribe;

  private data: CreditsPersonDescriptor = new CreditsPersonDescriptor();

  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._person_detail_service.getPersonCredits(id).subscribe(
        (data) => {
          this.data = data;
          console.log(data);
        }

      )


    });

  }

}
