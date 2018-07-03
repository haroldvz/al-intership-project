import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailTVService } from '../../shared/services/detail-tv.service';
import { ResponseVideoDescriptor } from '../../shared/types/video.type';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-serie-videos',
  templateUrl: './serie-videos.component.html',
  styleUrls: ['./serie-videos.component.scss']
})
export class SerieVideosComponent implements OnInit {

  private routerSubscribe;
  //public data: ResponseVideoDescriptor = new ResponseVideoDescriptor();

  constructor(private _detail_tv_service: DetailTVService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }

  @Input() public data;

  private base_video_url:string = environment.api_video_url;

  ngOnInit() {


    /*this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._detail_tv_service.getTVVideos(id).subscribe(
        (data) => {

          this.data = data;
          console.log(data);

        }
      );

    });*/



  }

  /**
   *
   *
   * @param {string} param
   * @returns
   * @memberof SerieVideosComponent
   */
  makeSafeVideoURL(param:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.base_video_url + param);
  }

}
