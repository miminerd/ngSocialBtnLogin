# Angular social login buttons

simple npm package to display social login buttons using Angular.\
Signin with Google, Linkedin, Facebook \
- 👉 [live demo](https://angular-social-login-buttons.herokuapp.com/)

## Install
- npm \
npm install --save angular-social-login-buttons 

- yarn \
yarn add angular-social-login-buttons


## Import
add in top of the body tag in index.html the facebook sdk and google sdk
like the below image
![Alt text](https://raw.githubusercontent.com/miminerd/ngSocialBtnLogin/master/img/log1.jpg?token=AOPKXTF6UXHMTRBKDOFJHZTAB22CQ )

or in raw version: \

<pre>
<body>
  <script async defer src="https://apis.google.com/js/api.js"></script>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1207524632976216',
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
</script>
....
</body>

</pre>

in app.module.ts 

import the AngularSocialLoginButtonsModule module and provide your clientId for the google \
or linkedin 

![Alt text](https://raw.githubusercontent.com/miminerd/ngSocialBtnLogin/master/img/log3.jpg?token=AOPKXTCH5DDEQ33RTUL4WTTAB22JO)

<pre>
import { AngularSocialLoginButtonsModule, AngularSocialLoginButtonsService } from 'angular-social-login-buttons';

// Configs
export function getAuthServiceConfigs() {
  const config = new AngularSocialLoginButtonsService();
  config.addGoogle('your-google-client-id');
  config.addLinkedin('your-linkedin-client-id');
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSocialLoginButtonsModule,
    ....
  ],
  providers: [ {provide: AngularSocialLoginButtonsService,
                useFactory: getAuthServiceConfigs}
              ],
  bootstrap: [AppComponent]
})
</pre>

## Usage

to use the facebook Signin button add in your html file \
 `<lib-fb-login></lib-fb-login>` \
to use the google Signin button add in your html file \
`<lib-google-login></lib-google-login>` \
to use the linkedin  Signin button add in your html file \
`<lib-linkedin-login></lib-linkedin-login>`


## Example

An example using the angular-social-login-buttons package is in the github repo.
[repo](https://github.com/miminerd/socialLoginExample/)

## Author
[Juda Buchahda](https://juda-landing-cv.herokuapp.com/home) \
-[Github](https://github.com/miminerd)