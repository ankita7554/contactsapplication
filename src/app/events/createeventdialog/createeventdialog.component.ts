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
  ) {}

eventGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null),
    email: new FormControl(null),
    dateCreated: new FormControl(null)
  });

  ngOnInit() {

  }


}
