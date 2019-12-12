import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.css']
})
export class RegisteredusersComponent implements OnInit {
  dataSource = new MatTableDataSource<[Registeredusers]>();
  displayedColumns = ['name', 'phone', 'email'];
  isDataLoading = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private http: HttpClient) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getRegisteredUsers();
  }
  getRegisteredUsers() {
    this.isDataLoading = true;

    this.http
      .get('http://localhost:3000/registration')
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.isDataLoading = false;
      });
  }
}

export interface Registeredusers {
  id: number;
  name: string;
  phone: number;
  email: string;
}
