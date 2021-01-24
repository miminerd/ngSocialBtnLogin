# Angular social login buttons

npm simple package to display social login buttons using Angular.
Signin with Google, Linkedin, Facebook \
[Demo](https://karma-runner.github.io)

## Features

The project contains 2 parts:
- in the projects folder: the actual npm package (where the library is developed)
- the other is a regular angular project using the npm package, you can check it.


## Install
- npm \
npm install --save angular-social-login-buttons \

- yarn \
yarn add angular-social-login-buttons


## Import
add in top of the body tag in index.html the facebook sdk and google sdk
  <script async defer src="https://apis.google.com/js/api.js"></script>
  <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'Your-facebook-client-ID',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
      
    };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   </script> \

in app.module.ts \

   import { AngularSocialLoginButtonsModule, AngularSocialLoginButtonsService } from 'angular-social-login-buttons';

   // Configs
   export function getAuthServiceConfigs() {
     const config = new AngularSocialLoginButtonsService();
     config.addGoogle('YOUR-GOOGLE-CLIENT-ID');
     config.addLinkedin('YOUR-LINKEDIN-CLIENT-ID');
     return config;
   } \

@NgModule({
  declarations: [
    AppComponent
    ...
  ],
  imports: [
    ....
    AngularSocialLoginButtonsModule
  ],
  providers: [ {provide: AngularSocialLoginButtonsService,
                useFactory: getAuthServiceConfigs}
              ],
  bootstrap: [AppComponent]
})


## Usage

to use the facebook Signin button add in your html file \
<lib-fb-login></lib-fb-login>
to use the google Signin button add in your html file \
<lib-google-login></lib-google-login>
to use the linkedin  Signin button add in your html file \
<lib-linkedin-login></lib-linkedin-login>


## Example

clone the project and run 'npm install' 
run 'ng serve ' to run the demo at http://localhost:4200/

