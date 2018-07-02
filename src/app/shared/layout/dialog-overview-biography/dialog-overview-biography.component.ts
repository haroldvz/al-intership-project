import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-overview-biography',
  templateUrl: './dialog-overview-biography.component.html',
  styleUrls: ['./dialog-overview-biography.component.scss']
})
export class DialogOverviewBiographyComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewBiographyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }


}
