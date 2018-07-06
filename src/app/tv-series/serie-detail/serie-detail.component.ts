import { Component, OnInit } from '@angular/core';
import { TdMediaService, TdLoadingService } from '@covalent/core';
import { ActivatedRoute } from '@angular/router';
import { DetailTVService } from '../../shared/services/detail-tv.service';
import { TVSeriesDescriptor } from '../../shared/types/tv-series/detail-tv.type';
import { environment } from '../../../environments/environment';
import { CreditsTVDescriptor } from '../../shared/types/tv-series/tv-credits.type';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {


  public myStyles = {
    'height': '100%',
    'z-index': '2',
    'padding-left': ' 4%',
    'padding-right': ' 4%',
    'background': ' radial-gradient(ellipse at 34% 60%, rgba(' + this.getRandomInt(0, 125) + ', 30, 28, 0.95) 0%, rgba(50, 43, 25, 0.90) 100%)'
  }

  public selected_item: number = 1;
  public routerSubscribe;

  public data: TVSeriesDescriptor = new TVSeriesDescriptor();
  public genres;
  public base_img_url_backdrop_path: string = environment.api_image_url + environment.api_image_backdrop_size;


  /**
   *
   * Nav items array for display detail movie components
   * @type {Object[]}
   * @memberof MovieDetailComponent
   */
  items_detail: Object[] = [
    {
      name: 'Cast',
      tab_number: 1,
      icon: 'tv',
    },
    {
      name: 'Similar',
      tab_number: 2,
      icon: 'tv',
    },
    /*{
      name: 'Images',
      tab_number: 3,
      icon: 'tv',
    },*/
    {
      name: 'Videos',
      tab_number: 4,
      icon: 'tv',
    },
    {
      name: 'Reviews',
      tab_number: 5,
      icon: 'tv',
    }
  ];

  data_credits:CreditsTVDescriptor = new CreditsTVDescriptor();

  constructor(
    private _detail_tv_service: DetailTVService,
    private route: ActivatedRoute,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService,
  ) { }

  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {
      this.LoadingRegister();
      let id: number = params['id'];
      this._detail_tv_service.getTVDetail(id).subscribe(
        (data) => {
          this.data = data;
          console.log(this.data);
          //this.genres = data.genres.map((element) => { return element.name }).join(', ');
          this.loadingResolve();
        }
      );

      this._detail_tv_service.getCreditsTVSeries(id).subscribe(
        (data) => {
          this.data_credits = data;
          this.loadingResolve();
        }
      );
    });
  }


  /**
   *
   *
   * @param {number} item_number
   * @memberof SerieDetailComponent
   */
  setItem(item_number: number): void {
    this.selected_item = item_number;
  }


  /**
  *
  *
  * @param {*} min
  * @param {*} max
  * @returns {number}
  * @memberof MovieDetailComponent
  */
  getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   *
   *
   * @memberof ListMoviesComponent
   */
  LoadingRegister(): void {
    this._loadingService.register('movie-detail');
  }

  /**
   *
   *
   * @memberof ListMoviesComponent
   */
  loadingResolve(): void {
    this._loadingService.resolve('movie-detail');
  }

}
