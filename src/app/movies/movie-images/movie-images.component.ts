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

  imageData = [
    {
      srcUrl: 'https://pixabay.com/get/eb3db9072df5083ecd0b4003e64d4094fe76e7d619b5134290f6c8_960.jpg',
      previewUrl: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_150.jpg'
    }
    // ... more items
  ];

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
