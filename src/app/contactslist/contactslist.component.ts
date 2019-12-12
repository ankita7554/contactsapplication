import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddcontactComponent } from '../addcontact/addcontact.component';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  isDataLoading = false;
  profileId: number;
  // @Input() tableDataSource: any;
  //OR Assigning an alias
  //@Input('tableDS') tableDataSource: any;
  // @Output() edit = new EventEmitter<any>();
  // @Output() delete = new EventEmitter<any>();
  // @Output() messageEvent = new EventEmitter<string>();
  dataSource = new MatTableDataSource<[Contacts]>();

  displayedColumns = ['name', 'phone', 'email', 'dateCreated'];
  constructor(
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {
    //this.dataSource = this.tableDataSource;
  }

  contactDataSource = {};

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.getContact();

    // setTimeout(() => (this.dataSource.paginator = this.paginator));
    // setTimeout(() => (this.dataSource.sort = this.sort));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openProfile(id, name) {
    this.router.navigate(['/profile/' + id + '/' + name]);
  }
  getContact() {
    this.isDataLoading = true;

    const contactsJson = this.http
      .get('http://localhost:3000/contacts')
      .subscribe((data: any) => {
        this.dataSource = data;
        this.isDataLoading = false;
      });
  }

  ngOnChanges() {
    //this.dataSource = this.tableDataSource;
  }

  // editContact(contact: Contacts) {
  //   this.edit.emit(contact);
  // }
  createContactDialog(): void {
    const dialogRef = this.dialog.open(AddcontactComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.isDataLoading = true;
      if (result) {
        this.http
          .post('http://localhost:3000/contacts', result)
          .subscribe(data => {
            this.getContact();
          });
      }
      this.isDataLoading = false;
    });
  }
  editContact(contact) {
    const dialogRef = this.dialog.open(AddcontactComponent, {
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isDataLoading = true;
      this.http
        .put('http://localhost:3000/contacts/' + result.id, result)
        .subscribe(data => {
          this.getContact();
        });

      this.isDataLoading = false;
    });
  }
  // deleteContact(contact: Contacts) {
  //   this.delete.emit(contact);
  // }

  deleteContact(contact) {
    this.http
      .delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(data => {
        //this.dataSource = new MatTableDataSource<any>(data);
        this.getContact();
      });
  }

  showProfile() {
    this.router.navigate(['/profile']);
  }
}

export interface Contacts {
  id: number;
  name: string;
  phone: number;
  email: string;
  dataCreated: string;
}
