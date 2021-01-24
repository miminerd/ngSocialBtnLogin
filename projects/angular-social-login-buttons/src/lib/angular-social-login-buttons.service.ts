import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularSocialLoginButtonsService {
  googleClientId: any;
  linkedinClientId: any;

  constructor() { }

  addGoogle(clientId: any) {
    this.googleClientId = clientId;
  }
  addLinkedin(clientId: any) {
    this.linkedinClientId = clientId;
  }
  getGoogleId() {
    return this.googleClientId;
  }
  getLinkedinId() {
    return this.linkedinClientId;
  }

}
