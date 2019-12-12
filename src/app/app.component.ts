import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent{
  title = 'mycontactsapp';
  isDataLoading = false;

  constructor(public dialog: MatDialog, private http: HttpClient) {}
  contactDataSource = {};
  ngOnInit() {
    this.getContact();
  }

  getContact() {
    const contactsJson = this.http
      .get('http://localhost:3000/contacts')
      .subscribe(data => {
        //this.dataSource = new MatTableDataSource<any>(data);
        this.contactDataSource = data;
      });
  }
}
