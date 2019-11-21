import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycontactsapp';
  isDataLoading = false;
  displayedColumns = ['name', 'phone', 'email', 'dateCreated'];
  contacts = [
    {
      name: 'Ankita',
      phone: '8319809847',
      email: 'ankita@gmail.com',
      dateCreated: new Date().toDateString()
    },
    {
      name: 'Viswa',
      phone: '8319809847',
      email: 'v@gmail.com',
      dateCreated: new Date().toDateString()
    },
    {
      name: 'Pallavi',
      phone: '8319809847',
      email: 'pallavi@gmail.com',
      dateCreated: new Date().toDateString()
    }
  ];
  constructor(public dialog: MatDialog, private http: HttpClient) {}
  dataSource = new MatTableDataSource<any>();
  ngOnInit() {
    this.getContact();
  }
  getContact() {
    const contactsJson = this.http
      .get('http://localhost:3000/contacts')
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<any>(data);
      });
  }

  // dataSource = new MatTableDataSource<any>(this.contactsJson);

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      data: this.contacts
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.isDataLoading = true;
    //   this.contacts.push(result);
    //   this.dataSource = new MatTableDataSource<any>(this.contacts);
    //   this.isDataLoading = false;
    // });

    //with integration
    dialogRef.afterClosed().subscribe(result => {
      this.isDataLoading = true;
      const contactsJson = this.http
        .post('http://localhost:3000/contacts', result)
        .subscribe(data => {
          this.getContact();
        });

      this.isDataLoading = false;
    });
  }

  editContact(contact) {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      data: contact
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.isDataLoading = true;
    //   this.contacts.forEach((element, index) => {
    //     if (element.email === result.email) {
    //       element.name = result.name;
    //       element.phone = result.phone || '0000000000';
    //       element.dateCreated = result.dateCreated || new Date();
    //     }
    //   });

    //   this.dataSource = new MatTableDataSource<any>(this.contacts);
    //   this.isDataLoading = false;
    // });

    //with integration api
    dialogRef.afterClosed().subscribe(result => {
      this.isDataLoading = true;
      const contactsJson = this.http
        .put('http://localhost:3000/contacts/' + result.id, result.name)
        .subscribe(data => {
          this.getContact();
        });

      this.isDataLoading = false;
    });
  }

  deleteContact(contact) {
    // this.isDataLoading = true;
    // this.contacts.forEach((element, index) => {
    //   if (element.email === contact.email) this.contacts.splice(index, 1);
    // });
    // this.dataSource = new MatTableDataSource<any>(this.contacts);
    // this.isDataLoading = false;
    //integrating with api.

    contactsJson = this.http
      .delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(data => {
        //this.dataSource = new MatTableDataSource<any>(data);
        this.getContact();
      });
  }
}
