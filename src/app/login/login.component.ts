import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit() {}
  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    passwordFormControl: new FormControl('', [Validators.required])
  });

  loginComponent() {
    if (this.loginForm.invalid) {
      return;
    }
    //console.log(this.emailFormControl.value);
    else this.dialogRef.close(this.loginForm.value);
    //console.log(this.loginForm.value);
  }
}
