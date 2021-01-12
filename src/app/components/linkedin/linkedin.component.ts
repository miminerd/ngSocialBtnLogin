import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {

  linkedInCredentials = {
    clientId: '77v8lsonfjvsan',
    redirectUrl: 'https://dev-c4yqwvgf.us.auth0.com/login/callback'
  };
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {}

  authenticate() {
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=r_emailaddress`;
  }

}
