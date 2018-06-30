import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailMovieService } from '../../shared/services/detail-movie.service';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';

@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss']
})
export class MovieImagesComponent implements OnInit {

  private routerSubscribe;
  public data: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();

  constructor(private _detail_movie_service: DetailMovieService,
    private route: ActivatedRoute,) { }
//getMovieImages
  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._detail_movie_service.getMovieImages(id).subscribe(
        (data) => {

          this.data = data;
          console.log(data);

        }
      );

    });
  }

}
