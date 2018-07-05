import { Component, OnInit } from '@angular/core';
import { ResponseTVSeriesDescriptor } from '../../shared/types/tv-series/tv-response.type';
import { DetailTVService } from '../../shared/services/detail-tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar-series',
  templateUrl: './similar-series.component.html',
  styleUrls: ['./similar-series.component.scss']
})
export class SimilarSeriesComponent implements OnInit {

  private routerSubscribe;
  public data: ResponseTVSeriesDescriptor = new ResponseTVSeriesDescriptor();

  constructor(private _detail_tv_service: DetailTVService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this._detail_tv_service.getSimilarTVSeries(id).subscribe(
        (data) => {
          this.data = data;
          //console.log(data);
        }
      );
    });
  }
}
