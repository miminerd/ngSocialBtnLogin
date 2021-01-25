# Angular social login buttons

simple npm package to display social login buttons using Angular.\
Signin with Google, Linkedin, Facebook \
[Demo]coming soon

## Install
- npm \
npm install --save angular-social-login-buttons 

- yarn \
yarn add angular-social-login-buttons


## Import
add in top of the body tag in index.html the facebook sdk and google sdk
![Alt text](https://raw.githubusercontent.com/miminerd/ngSocialBtnLogin/master/img/log1.jpg?token=AOPKXTF6UXHMTRBKDOFJHZTAB22CQ )

in app.module.ts 

import the AngularSocialLoginButtonsModule module and provide your clientId for the google \
or linkedin 

![Alt text](https://raw.githubusercontent.com/miminerd/ngSocialBtnLogin/master/img/log3.jpg?token=AOPKXTCH5DDEQ33RTUL4WTTAB22JO)
## Usage

to use the facebook Signin button add in your html file
 <%= lib-fb-login></lib-fb-login  %>


to use the google Signin button add in your html file 
      <%=   lib-google-login></lib-google-login   %> 

to use the linkedin  Signin button add in your html file 
     <%= lib-linkedin-login></lib-linkedin-login    %>


## Example

An example using the angular-social-login-buttons package is in the github repo.
(I will post it soon just cleaning things up)

### Features

The project contains 2 parts:
- in the projects folder: the actual npm package (where the library is developed)
- the other is a regular angular project using the npm package, you can check it.

clone the project and run 'npm install'  \
run 'ng serve ' to run the demo at http://localhost:4200/

I used client ids just for the example and testing please don't use them
in your own projects

## Author
[Juda Buchahda](https://juda-landing-cv.herokuapp.com/home) \
-[Github](https://github.com/miminerd)