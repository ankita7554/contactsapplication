import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { ProfiledataComponent } from './profiledata/profiledata.component';
import { ProfilehovercardComponent } from './profilehovercard/profilehovercard.component';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './auth-services';
import { AuthGuard } from './auth-guard-service';
import { ShortenPipe } from './shorten.pipe';
import { FiltercontactPipe } from './filtercontact.pipe';
import { EventsComponent } from './events/events.component';
import { CreateeventdialogComponent } from './events/createeventdialog/createeventdialog.component';

const approutes: Routes = [
  {
    path: 'profile/:id/:name',
    // canActivate: [AuthGuard],
    component: ProfiledataComponent
  },
  {
    path: 'profile',
    // canActivate: [AuthGuard],
    component: ProfiledataComponent
  },
  {
    path: 'contacts',
    //canActivate: [AuthGuard],
    component: ContactslistComponent
  },
  {
    path: 'registeredusers',
    //canActivate: [AuthGuard],
    component: RegisteredusersComponent
  },
  {
    path: 'events',
    //canActivate: [AuthGuard],
    component: EventsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    HeadercomponentComponent,
    LoginComponent,
    RegisterComponent,
    ContactslistComponent,
    ProfiledataComponent,
    ProfilehovercardComponent,
    HomecomponentComponent,
    RegisteredusersComponent,
    ShortenPipe,
    FiltercontactPipe,
    EventsComponent,
    CreateeventdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    MatTabsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [AddcontactComponent, LoginComponent, RegisterComponent,CreateeventdialogComponent
  ],
  providers: [AuthGuard, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule {}
