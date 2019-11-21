import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
  register() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }
}
