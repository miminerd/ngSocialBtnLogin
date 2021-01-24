import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularSocialLoginButtonsService } from '../../angular-social-login-buttons.service';

@Component({
  selector: 'lib-linkedin-login',
  templateUrl: './linkedin-login.component.html',
  styleUrls: ['./linkedin-login.component.css']
})
export class LinkedinLoginComponent implements OnInit {
  data: any;
  linkedInCredentials: any;

  constructor(private http: HttpClient, private configService: AngularSocialLoginButtonsService) {}


  ngOnInit(): void {
    this.data = this.configService.getLinkedinId();
    this.linkedInCredentials = {
      clientId: this.data,
      redirectUrl: 'https://dev-5uchuarw.us.auth0.com/login/callback'
    };
  }

  authenticate() {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=r_emailaddress`;
  }

}
