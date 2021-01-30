# Angular social login buttons

simple npm package to display social login buttons using Angular.\
Signin with Google, Linkedin, Facebook \
- 👉 [demo](https://angular-social-login-buttons.herokuapp.com/)

## Features

The project contains 2 parts:
- in the projects folder: the actual npm package (where the library is developed)
- the other is a regular angular project using the npm package, you can check it.


## Install
to install the npm package via 

- npm \
npm install --save angular-social-login-buttons 

- yarn \
yarn add angular-social-login-buttons


## Import
add in top of the body tag in index.html the facebook sdk and google sdk
![Alt text](/img/log1.jpg?raw=true "sdk")

in app.module.ts 

import the AngularSocialLoginButtonsModule module and provide your clientId for the google \
or linkedin 

![Alt text](/img/log3.jpg?raw=true "imports")
## Usage

to use the facebook Signin button add in your html file \
 `<lib-fb-login></lib-fb-login>` \
to use the google Signin button add in your html file \
`<lib-google-login></lib-google-login>` \
to use the linkedin  Signin button add in your html file \
`<lib-linkedin-login></lib-linkedin-login>`


## Example
 here is an the repo of the demo using the angular-social-login-buttons package [repo](https://github.com/miminerd/socialLoginExample) 

 ## Contribution
I welcome issues and pull requests on [pr](https://github.com/miminerd/ngSocialBtnLogin)

 ## Author👩🏻‍💻
[Juda Buchahda](https://juda-landing-cv.herokuapp.com)
