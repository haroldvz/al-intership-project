
/**
 * PersonImagesComponent's component class
 *
 * Class that set up the PersonImagesComponent's component implementation
 * @author Harold Velez <harold.velez.zambrano@correounivalle.edu.co>
 *
 */

import { Component, OnInit } from '@angular/core';
import { DetailPersonService } from '../../shared/services/detail-person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-images',
  templateUrl: './person-images.component.html',
  styleUrls: ['./person-images.component.scss']
})
export class PersonImagesComponent implements OnInit {

  private routerSubscribe;

  data;

  /**
   *Creates an instance of PersonImagesComponent.
   * @param {DetailPersonService} _person_detail_service
   * @param {ActivatedRoute} route
   * @memberof PersonImagesComponent
   */
  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute,) { }

  /**
   *
   *
   * @memberof PersonImagesComponent
   */
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
