
/**
 * Homes's component class
 *
 * Class that set up the home's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatCardModule } from '@angular/material';
import { TdMediaService } from '@covalent/core';
import { ImagesMoviesDescriptor } from './../../types/movies/images.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { ResponseDescriptor } from './../../types/movies/response.type';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  imageUrls: IImage[] = [];
  data: ResponseDescriptor = new ResponseDescriptor();
  upcoming_movies: ResponseDescriptor = new ResponseDescriptor();
 
  /**
   *Creates an instance of HomeComponent.
   * @param {TdMediaService} media
   * @param {MatIconRegistry} _iconRegistry
   * @param {DomSanitizer} _domSanitizer
   * @param {MovieService} _movie_service
   * @param {ActivatedRoute} route
   * @memberof HomeComponent
   */
  constructor(
    public media: TdMediaService,
    private _router: Router,
    //private _movie_service:MovieService,//movie service
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _movie_service: MovieService,
    private route: ActivatedRoute, ) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {

    this._movie_service.getUpcomingMovies(1).subscribe(
      (data) => {
        this.upcoming_movies = data;
        for (let i = 0; i < this.upcoming_movies.results.length; i++) {
          this.imageUrls.push({
            url: 'https://image.tmdb.org/t/p/w1280/' + this.upcoming_movies.results[i].backdrop_path,
            caption: this.upcoming_movies.results[i].title, clickAction: () => this._router.navigate(['/movie/', this.upcoming_movies.results[i].id])
          })
        }

      }
    );

    this._movie_service.getTopRatedMovies(1).subscribe(
      (data) => {
        this.data = data;
      }
    );

  }


}

