var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

//http://blog.revathskumar.com/2015/07/using-promises-with-mongoosejs.html
var local = new LocalStrategy({
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
);

passport.use(local);