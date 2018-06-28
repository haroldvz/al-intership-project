import { Component, OnInit } from '@angular/core';
import { DetailMovieService } from '../../shared/services/detail-movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptor } from '../../shared/types/movies/detail-movie.type';
import { TdLoadingService, TdMediaService } from '@covalent/core';
import { environment } from './../../../environments/environment';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  
  private base_img_url_backdrop_path:string = environment.api_image_url + environment.api_image_backdrop_size;
  private routerSubscribe;
  private data: MovieDescriptor = new MovieDescriptor();
  private genres;

  //use ngClass
  myStyles = {
    'height': '100%',
    'z-index': '2',
    'padding-left':' 4%',
    'padding-right':' 4%',
   
    'margin-bottom': '5%',
    'background-image':' radial-gradient(circle at 20% 50%, rgba('+this.getRandomInt(0,120)+', 40, 38, 0.94) 0%, rgba(44, 39, 17, 0.94) 100%)'
    }

  constructor(
    private _movie_detail_service: DetailMovieService,
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

    });


    /*st(){
      this.masEditConfig = {
        accountId: this.accountId,
        deploymentId:this.deploymentId,
        items_count:0,
        params:this.params
      }
    }

    ons(){
      this.params.offset = 0;
      this.params.search = value ? value:undefined;
      this.loadData('all')
    }*/




  }

  getRandomInt(min, max) {
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
