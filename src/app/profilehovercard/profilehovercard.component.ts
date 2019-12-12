import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profilehovercard',
  templateUrl: './profilehovercard.component.html',
  styleUrls: ['./profilehovercard.component.css']
})
export class ProfilehovercardComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
