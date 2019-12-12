import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateeventdialogComponent } from './createeventdialog/createeventdialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  constructor(public dialog: MatDialog) {
    
   }

createEventDialog(): void {
    const dialogRef = this.dialog.open(CreateeventdialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   this.isDataLoading = true;
    //   if (result) {
    //     this.http
    //       .post('http://localhost:3000/contacts', result)
    //       .subscribe(data => {
    //         this.getContact();
    //       });
    //   }
    //   this.isDataLoading = false;
    // });
  }
  ngOnInit() {
  }

}
