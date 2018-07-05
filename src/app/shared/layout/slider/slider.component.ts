import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryComponent } from 'ngx-gallery';
import { Router } from '@angular/router';
import { ResponseDescriptor } from '../../types/movies/response.type';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() public data;
  @Input() public data_all = new ResponseDescriptor();

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  selectedImage: NgxGalleryImage;
  gallery: {images: NgxGalleryImage[], options: NgxGalleryOptions[]};

  constructor(private _router: Router,) { }

  ngOnInit() {

    
    this.galleryOptions = [
      {
        imageDescription: true,
        width: '750px',
        height: '550px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      },
      // max-width 800
      {
        imageDescription: true,
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        preview: false
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];


    if (this.data.backdrops) {

      for (let i = 0; i < this.data.backdrops.length; i++) {
        this.galleryImages.push({ small: 'https://image.tmdb.org/t/p/w342' + this.data.backdrops[i].file_path, medium: 'https://image.tmdb.org/t/p/w1400_and_h450_bestv2' + this.data.backdrops[i].file_path, big: 'https://image.tmdb.org/t/p/w1400_and_h450_bestv2' + this.data.backdrops[i].file_path, 
        description:this.data_all.results[i].title })
      }
      if(this.galleryImages[0]){
        this.selectedImage = this.galleryImages[0];
      }
      
    }
    
    
  }


changeMoviePreview(change: { index: number; image: NgxGalleryImage; }) {
  //console.log(change)
  this.selectedImage = change.image;
}

getIdSelectedMovie(): number {

  if(this.data_all.results){return this.data_all.results.filter(
    movie =>
    this.selectedImage.description.indexOf(movie.title) !== -1)[0].id;}else{
      return 0;
    }
  
 }


goToMovie() {
  const idSelectedMovie = this.getIdSelectedMovie();
  this._router.navigate(['./movie/', idSelectedMovie]);
}

}
