import { NgModule } from '@angular/core';
import { AngularSocialLoginButtonsComponent } from './angular-social-login-buttons.component';
import { FbLoginComponent } from './components/fb-login/fb-login.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { AngularSocialLoginButtonsService } from './angular-social-login-buttons.service';
import { LinkedinLoginComponent } from './components/linkedin-login/linkedin-login.component';


@NgModule({
  declarations: [AngularSocialLoginButtonsComponent, FbLoginComponent, GoogleLoginComponent, LinkedinLoginComponent
  ],
  imports: [
  ],
  exports: [AngularSocialLoginButtonsComponent,
    FbLoginComponent, GoogleLoginComponent, LinkedinLoginComponent]
})
export class AngularSocialLoginButtonsModule { }
