import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialID } from '../../../assets/SocialID';


@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {
  client = new SocialID();

  linkedInCredentials = {
    clientId: this.client.config[1].LinkedinClientID,
    redirectUrl: 'https://dev-5uchuarw.us.auth0.com/login/callback'
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
