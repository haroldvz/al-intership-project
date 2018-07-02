import { Component, OnInit } from '@angular/core';
import { DetailPersonService } from '../../shared/services/detail-person.service';
import { ActivatedRoute } from '@angular/router';
import { ImagesMoviesDescriptor } from '../../shared/types/movies/images.type';
import { ImagesPersonDescriptor } from '../../shared/types/person/images-person.type';

@Component({
  selector: 'app-person-images',
  templateUrl: './person-images.component.html',
  styleUrls: ['./person-images.component.scss']
})
export class PersonImagesComponent implements OnInit {

  private routerSubscribe;

  data;

  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute,) { }

  ngOnInit() {


    this.routerSubscribe = this.route.params.subscribe(params => {

      let id: number = params['id'];

      this._person_detail_service.getPersonImages(id).subscribe(
        (data) => {

          this.data = data;
          console.log("data person img");
          console.log(data);
        }

      )


    });


  }

}
