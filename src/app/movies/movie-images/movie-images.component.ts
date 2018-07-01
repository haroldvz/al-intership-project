import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailMovieService } from '../../shared/services/detail-movie.service';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss']
})
export class MovieImagesComponent implements OnInit {
  //https://image.tmdb.org/t/p/w780
  //https://image.tmdb.org/t/p/w342/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

  images: GalleryItem[];

  public imageData = [
   

  ];

  data;

  private routerSubscribe;
  public images_data: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();

  constructor(private _detail_movie_service: DetailMovieService,
    private route: ActivatedRoute, ) { }


  ngOnInit() {

    this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._detail_movie_service.getMovieImages(id).subscribe(
        (data) => {

          this.data = data;
          console.log("DATA en movieimage");
          console.log(this.data);

          this.images_data = data;

          let data_backdrops = this.images_data.backdrops;
          /*console.log("DB"+data_backdrops.length)

          data_backdrops.forEach(element => {
            console.log(element)
            this.imageData.push( { srcUrl: 'https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg', previewUrl: 'https://image.tmdb.org/t/p/w342/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg' })
          });*/


        }
      );

    });
  }

}
