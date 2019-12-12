import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-createeventdialog',
  templateUrl: './createeventdialog.component.html',
  styleUrls: ['./createeventdialog.component.css']
})
export class CreateeventdialogComponent implements OnInit {
 eventGroup:FormGroup
   constructor(
    public dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.eventGroup = new FormGroup({
    eventName: new FormControl(null, Validators.required)
    
  });
  }

// this.eventGroup = new FormGroup({
//     eventName: new FormControl(null, Validators.required)
    
//   });

  ngOnInit() {

  }


}
