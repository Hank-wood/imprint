var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

//http://blog.revathskumar.com/2015/07/using-promises-with-mongoosejs.html
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    var promise = User.findOne({ email: username }).exec();
    promise.then(function(user) {
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, user);
    })
    .catch(function(err){
      return done(err);
    });
  }
));

// var GITHUB_CLIENT_ID = '9b74575333817ce203cf';
// var GITHUB_CLIENT_SECRET = '840ae56a9db0226dab8c98ff3fd5a48f3faf6f48'; 
 
// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, done){
//     return done(null, profile);
//   }
// ));