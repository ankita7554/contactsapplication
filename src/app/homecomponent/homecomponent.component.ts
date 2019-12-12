import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  navLinks = [
    { label: 'contacts', path: 'contacts' },
    { label: 'profile', path: 'profile' },
    { label: 'Users', path: 'registeredusers' }
  ];
}
