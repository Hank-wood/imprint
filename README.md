# Imprint - User Authentication with MEAN

Imprint is a full-stack single page app with the MEAN architecture and REST API using Angular, Node, Express and MongoDB.

### Imprint Workflow Flow
```
imprint
├── app_api
│   ├── config
│   ├── controllers
│   ├── models
│   └── routes
├── app_client
│   ├── auth
│   │   ├── login
│   │   └── register
│   ├── common
│   │   ├── directives
│   │   │   ├── footerGeneric
│   │   │   ├── navigation
│   │   │   └── pageHeader
│   │   └── services
│   ├── home
│   └── lib
├── bin
├── node_modules
│   ├── body-parser
│   ├── cookie-parser
│   ├── debug
│   ├── dotenv
│   ├── express
│   ├── express-jwt
│   ├── jsonwebtoken
│   ├── mongoose
│   ├── morgan
│   ├── passport
│   ├── passport-local
│   ├── serve-favicon
│   └── uglify-js
└── public
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