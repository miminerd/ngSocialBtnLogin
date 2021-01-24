import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularSocialLoginButtonsService {
  googleClientId: any;
  linkedinClientId: any;

  constructor() { }

  addGoogle(clientId: any) {
    console.log('in lib service ', clientId);
    this.googleClientId = clientId;
  }
  addLinkedin(clientId: any) {
    console.log('in lib service ', clientId);
    this.linkedinClientId = clientId;
  }
  getGoogleId() {
    console.log('fromm service ', this.googleClientId);
    return this.googleClientId;
  }
  getLinkedinId() {
    console.log('ge Linkedin ', this.linkedinClientId);
    return this.linkedinClientId;
  }

}
