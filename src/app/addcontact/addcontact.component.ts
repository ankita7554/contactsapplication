import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data) {
      this.updateContact();
    }
  }

  contactForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    dateCreated: new FormControl('')
  });

  addContact() {
    // this.contactForm.value.dateCreated = this.contactForm.value.dateCreated.toDateString()//;
    this.contactForm.value.id = this.data.id;
    this.dialogRef.close(this.contactForm.value);
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
