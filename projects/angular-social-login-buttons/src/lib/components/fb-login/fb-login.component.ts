import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.css']
})
export class FbLoginComponent implements OnInit {


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
