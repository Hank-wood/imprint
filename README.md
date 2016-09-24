# Imprint - User Authentication with MEAN

[![license](https://img.shields.io/badge/license-MIT%20License-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/badge/release-v0.0.1-blue.svg)]()

Imprint is a full-stack single page app with the MEAN(MongoDB, Express, Angular and Node) architecture, OAuth 2.0, SPA and RESTful API. Thanks for Simon Holmes, who is the author of [*Getting MEAN with Mongo, Express, Angular, and Node*](https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node), gave me the basic framework to working on.

## Imprint Workflow Flow

## Project Structure
```bash
imprint
├── app_api # RESTful API
│   ├── config
│   │   └── passport.js # Check whether or not the credentials informatic (email and password is valid)
│   ├── controllers
│   │   └── authentication.js
│   ├── models # MongoDB Connection, Models and Schemas
│   │   ├── db.js
│   │   └── users.js # Define models, functions of models and schemas of users
│   └── routes
│       └── index.js/
├── app_client # AngularJS App
│   ├── app.js
│   ├── auth
│   │   ├── login
│   │   │   ├── login.controller.js
│   │   │   └── login.view.html
│   │   └── register
│   │       ├── register.controller.js
│   │       └── register.view.html
│   ├── common
│   │   ├── directives
│   │   │   ├── footerGeneric
│   │   │   │   ├── footerGeneric.directive.js
│   │   │   │   └── footerGeneric.template.html
│   │   │   ├── navigation
│   │   │   │   ├── navigation.controller.js
│   │   │   │   ├── navigation.directive.js
│   │   │   │   └── navigation.template.html
│   │   │   └── pageHeader
│   │   │       ├── pageHeader.directive.js
│   │   │       └── pageHeader.template.html
│   │   └── services
│   │       └── authentication.service.js
│   ├── home
│   │   ├── home.controller.js
│   │   └── home.view.html
│   ├── index.html
│   └── lib
│       ├── angular-route.min.js
│       ├── angular-route.min.js.map
│       ├── angular-sanitize.min.js
│       ├── angular-sanitize.min.js.map
│       ├── ui-bootstrap-custom-0.12.0.min.js
│       └── ui-bootstrap-custom-tpls-0.12.0.min.js
├── app.js # Node.js and Express app
├── bin
│   └── www
├── node_modules # Node.js Modules
└── public # Images, CSS and Javascript Files
    ├── angular
    ├── bootstrap
    │   ├── css
    │   ├── fonts
    │   └── js
    ├── javascripts
    └── stylesheets
```
## Version
- **v0.0.1: stable version**
- v0.0.1: init verison

## Install & Run

```bash
git clone https://github.com/lushen/imprint.git
cd imprint
npm install
set JWT_SECRET=anyThingYouWant
npm start
```
>Before running Imprint, you should make sure you have installed ```node.js```, ```npm```, ```git``` and ```mongodb``` already. If there is no hidden file, ```.env```, in Imprint project, you should add a ```.env``` file at the root folder and write ```JWT_SECRET=anyThingYouWant``` in it(you can replace ```anyThingYouWant``` in any words).

## Platform
- Heroku

## License
The MIT License (MIT)

## What Next?
- [ ] Add users profile page when they sign in or sign up 
- [ ] Add third-party authentication, such as Facebook and Tiwtter
- [ ] Set users api authentication and extend current api
- [ ] Switch Angular@1.x.x to Angular@2.x.x (or React, maybe...)
- [ ] Push real-time data to the client side
- [ ] Switch mongodb to rethinkdb (depend on needs...)
- [ ] Add CSS and JS text animation effect and loading page
- [ ] Add verification email function when registered successfully
- [ ] Allow users to change the password
- [ ] Add more credentials notifications into register and login page
- [ ] Add gulp file to compress the project
- [x] Add more information detail users schema, such as register date and lastest login date
- [ ] Set up comments system
- [ ] add Logo and shields.io and align them to the center of README.md
