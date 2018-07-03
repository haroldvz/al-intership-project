import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatCardModule } from '@angular/material';
import { TdMediaService } from '@covalent/core';

// Load shared
import { TdLoadingService } from '@covalent/core';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private routerSubscribe;
  public images_data: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();

  data;
  backdrops_items = [];
  data_to_gallery_slider = {};

  constructor(
    public media: TdMediaService,
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

  ngOnInit() {

    this._movie_service.getPopularMovies(1).subscribe(
      (data) => {
        this.data = data;
        for(let i=0;i<data.results.length;i++){
          this.backdrops_items.push({file_path:data.results[i].backdrop_path})
        }
        this.data_to_gallery_slider['backdrops'] = this.backdrops_items;
        console.log(this.data_to_gallery_slider);
      }
    );

  }

}

