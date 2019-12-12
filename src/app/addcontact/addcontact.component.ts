import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  contactsData = this.data;

  ngOnInit() {
    if (this.data) {
      this.updateContact();
    }
  }

  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null),
    email: new FormControl(null),
    dateCreated: new FormControl(null)
  });

  addContact() {
    // this.contactForm.value.dateCreated = this.contactForm.value.dateCreated.toDateString()//;
    if (this.data) {
      this.contactForm.value.id = this.data.id;
    }
    if (this.contactForm.valid) {
      this.dialogRef.close(this.contactForm.value);
    }
  }

  updateContact() {
    this.contactForm.patchValue({
      name: this.data.name,
      phone: this.data.phone,
      email: this.data.email,
      date: this.data.dateCreated
    });
  }
}
