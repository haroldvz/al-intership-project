import { Component, OnInit } from '@angular/core';
import { CreditsTVPersonDescriptor } from '../../shared/types/person/tv-series-person.type';
import { DetailPersonService } from '../../shared/services/detail-person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-series',
  templateUrl: './person-series.component.html',
  styleUrls: ['./person-series.component.scss']
})
export class PersonSeriesComponent implements OnInit {

  private routerSubscribe;
  private data: CreditsTVPersonDescriptor = new CreditsTVPersonDescriptor();

  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {


    this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._person_detail_service.getPersonTVCredits(id).subscribe(
        (data) => {
          this.data = data;
          console.log(data);
        }

      )


    });

    

  }

}
