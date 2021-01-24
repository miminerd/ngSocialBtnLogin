import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-social-login-buttons',
  template: `
    <p>
      angular-social-login-buttons works!
    </p>
    <lib-fb-login></lib-fb-login>
  `,
  styles: []
})
export class AngularSocialLoginButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
