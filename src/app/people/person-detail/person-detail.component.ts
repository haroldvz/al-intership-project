import { Component, OnInit, Inject } from '@angular/core';
import { DetailPersonService } from '../../shared/services/detail-person.service';
import { ActivatedRoute } from '@angular/router';
import { PersonDescriptor } from '../../shared/types/person/detail-person.type';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogOverviewBiographyComponent } from '../../shared/layout/dialog-overview-biography/dialog-overview-biography.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  /**
   * Items of the secondary nabvar 
   *
   * @type {Object[]}
   * @memberof PersonDetailComponent
   */
  items_detail: Object[] = [
    {
      name: 'Images',
      tab_number: 1,
      icon: 'tv',
    }, {
      name: 'Movies',
      tab_number: 2,
      icon: 'tv',
    },
    {
      name: 'TV Series',
      tab_number: 3,
      icon: 'tv',
    },

  ];

  data: PersonDescriptor = new PersonDescriptor();
  routerSubscribe;
  selected_item: number = 2;

  /**
   *Creates an instance of PersonDetailComponent.
   * @param {DetailPersonService} _person_detail_service
   * @param {ActivatedRoute} route
   * @param {MatDialog} dialog
   * @memberof PersonDetailComponent
   */
  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  /**
   *
   *
   * @memberof PersonDetailComponent
   */
  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      let id: number = params['id'];
      //request
      this._person_detail_service.getPersonDetail(id).subscribe(
        (data) => {
          this.data = data;
          //console.log(data);
        }
      );
    });
  }

  /**
   * Open dialog pop up for show the biography
   * 
   * @memberof PersonDetailComponent
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewBiographyComponent, {
      width: '600px',
      data: { name: this.data.name, biography: this.data.biography }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /**
   * Set the item of teh navbar to show in person detail
   *
   * @param {number} item_number
   * @memberof PersonDetailComponent
   */
  setItem(item_number: number): void {
    this.selected_item = item_number;
  }



}
