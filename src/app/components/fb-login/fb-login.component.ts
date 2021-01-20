import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.scss']
})
export class FbLoginComponent implements OnInit {
  declare FB: any;

  constructor() { }

  ngOnInit(): void {
  }

  authenticate(): void {
    // tslint:disable-next-line:only-arrow-functions
    FB.login(function(response) {
      console.log('fac login ');
    });
  }
}
