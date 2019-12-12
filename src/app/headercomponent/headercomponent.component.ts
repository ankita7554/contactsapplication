import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private routes: Router
  ) {}

  ngOnInit() {}
  checkLoginstatus() {
    this.isLoggedIn = this.authService.getStatus();
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      this.http
        .get('http://localhost:3000/registration/')
        .subscribe((data: any) => {
          const element = data.find(
            element =>
              element.email === result.emailFormControl &&
              element.password === result.passwordFormControl
          );

          if (element) {
            this.authService.login();
            this.checkLoginstatus();
            this.authService.userActivated.next('true');
            this._snackBar.open('Login Successful', 'Dismiss', {
              duration: 10000
            });
          } else {
            this._snackBar.open('Login UnSuccessful', 'Dismiss', {
              duration: 10000
            });
          }
        });
    });
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.http
        .post('http://localhost:3000/registration/', result)
        .subscribe(data => {
          console.log(data);
        });
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.routes.navigate(['']);
  }
}
