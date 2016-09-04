# Imprint - User Authentication with MEAN

Imprint is a full-stack single page app with the MEAN architecture, Auth2.0, SPA and RESTful API using Angular, Node, Express and MongoDB.

### Imprint Workflow Flow

### Project Structure
```
imprint
├── app_api # RESTful API
│   ├── config
│   │   └── passport.js
│   ├── controllers
│   │   └── authentication.js
│   ├── models # MongoDB Connection, Models and Schemas
│   │   ├── db.js
│   │   └── users.js # Define Users Models and Schemas
│   └── routes
│       └── index.js
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

## Dependencies
- node: v0.12.7
- npm: v2.15.9
- body-parser: v1.15.2
- cookie-parser: v1.4.3
- debug: v2.2.0
- dotenv: v1.2.0
- express: v4.14.0
- express-jwt: v3.4.0
- jsonwebtoken: v5.0.2
- mongoose: v4.5.10
- morgan: v1.3.0
- passport: v0.3.2
- passport-local: v1.0.0
- serve-favicon: v2.3.0
- uglify-js: v2.7.3

## Install & Run

```bash
git clone https://github.com/lushen/imprint.git
cd imprint
npm install
npm start
```
>Before running Imprint, you should make sure you have installed Node.js, npm, git and MongoDB already.

##Platform
- Heroku

## License
The MIT License (MIT)

## What Next?
-[] Add users profile page when they sign in or sign up 
-[] Add third-party authentication
-[] Set users api authentication and extend current api
-[] Switch Angular@1.x.x to Angular@2.x.x (or React, maybe...)
-[] Push real-time data to the client side
-[] Switch mongodb to rethinkdb (depend on needs...)
-[] Add CSS and JS animation effect to the front end pages
-[] Add loading page