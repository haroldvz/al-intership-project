import { Component, OnInit } from '@angular/core';
import { DetailMovieService } from '../../shared/services/detail-movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';
import { TdLoadingService, TdMediaService } from '@covalent/core';
import { environment } from './../../../environments/environment';
import { MovieService } from '../../shared/services/movie.service';
import { CreditsDescriptor, CrewDescriptor } from '../../shared/types/movies/credits.type';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private base_img_url_backdrop_path: string = environment.api_image_url + environment.api_image_backdrop_size;
  private routerSubscribe;
  private data: MovieDescriptor = new MovieDescriptor();
  private data_credits: CreditsDescriptor = new CreditsDescriptor();
  private data_crew:CrewDescriptor[];
  private genres;

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
    }, {
      name: 'Crew',
      tab_number: 2,
      icon: 'tv',
    },
    {
      name: 'Similar',
      tab_number: 3,
      icon: 'tv',
    },
    {
      name: 'Images',
      tab_number: 4,
      icon: 'tv',
    },
    {
      name: 'Videos',
      tab_number: 5,
      icon: 'tv',
    }
  ];

  //use ngClass
  private myStyles = {
    'height': '100%',
    'z-index': '2',
    'padding-left': ' 4%',
    'padding-right': ' 4%',
    'background': ' radial-gradient(ellipse at 34% 60%, rgba(' + this.getRandomInt(0, 125) + ', 30, 28, 0.95) 0%, rgba(50, 43, 25, 0.90) 100%)'
  }

  private selected_item: number = 1;


  /**
   *Creates an instance of MovieDetailComponent.
   * @param {DetailMovieService} _movie_detail_service
   * @param {MovieService} _movie_service
   * @param {ActivatedRoute} route
   * @param {TdLoadingService} _loadingService
   * @param {TdMediaService} _mediaService
   * @memberof MovieDetailComponent
   */
  constructor(
    private _movie_detail_service: DetailMovieService,
    private _movie_service: MovieService,
    private route: ActivatedRoute,
    private _loadingService: TdLoadingService,
    public _mediaService: TdMediaService,
  ) { }

  ngOnInit() {


    this.routerSubscribe = this.route.params.subscribe(params => {

      this.LoadingRegister();

      /*setTimeout(() => {
      
        this._movie_service.getPopularMovies(1).subscribe(
          (data) => {
            this.data = data;
            this.resolveLoading();
            //this.movies.push(data.results);
          }
        );
      }, 5000);*/

      let id: number = params['id'];
      //request
      this._movie_detail_service.getMovieDetail(id).subscribe(
        (data) => {
          this.data = data;
          console.log(data);
          this.genres = data.genres.map((element) => { return element.name }).join(', ');
          this.loadingResolve();
          //this.movies.push(data.results);
        }
      );

      this._movie_service.getMovieCredits(id).subscribe(
        (data) => {
          console.log(data);
          this.data_credits = data;
          let crew_array = data.crew;
          this.data_crew = this.proccessList(crew_array);
         

        }
      );



    });

  }

  /**
   *
   *
   * @param {*} a
   * @param {*} b
   * @returns
   * @memberof MovieDetailComponent
   */
  isEqual(a, b){
    if(a['id'] != b['id']){return false;}    
    return true;
  }

  /**
   *
   *
   * @param {any[]} list
   * @returns
   * @memberof MovieDetailComponent
   */
  proccessList(list:any[]){
    list = list.filter((value, index, array) => 
    !array.filter((v, i) => this.isEqual(value, v) && i < index).length);
    return list;
  }


  /**
   *
   *
   * @param {number} item_number
   * @memberof MovieDetailComponent
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
