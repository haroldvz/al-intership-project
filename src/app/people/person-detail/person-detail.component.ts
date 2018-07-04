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

  animal: string;
  name: string;


  public data: PersonDescriptor = new PersonDescriptor();
  public routerSubscribe;
  public selected_item: number = 2;

  constructor(private _person_detail_service: DetailPersonService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewBiographyComponent, {
      width: '600px',
      data: { name: this.data.name, animal: this.animal, biography: this.data.biography }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  setItem(item_number: number): void {
    this.selected_item = item_number;
  }



}
