import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
