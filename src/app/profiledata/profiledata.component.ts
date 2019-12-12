import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../auth-services';

@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.css']
})
export class ProfiledataComponent implements OnInit, OnDestroy {
  id: number;
  name: string;
  intervalUnsubscribe: Subscription;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.observableDemo();
    console.log('Loads');
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params.name;
    });
    this.authService.userActivated.subscribe(data => {
      console.log('using subject observable', data);
    });
  }

  observableDemo() {
    var mynumber = interval(1000);
    this.intervalUnsubscribe = mynumber.subscribe(
      data => {
        console.log(data);
      },
      () => {},
      () => {}
    );
  }

  ngOnDestroy() {
    this.intervalUnsubscribe.unsubscribe();
  }
}
