import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input() public data;

  base_video_url:string = environment.api_video_url;

  constructor(private _sanitizer: DomSanitizer,) { }

  ngOnInit() {
  }

}
