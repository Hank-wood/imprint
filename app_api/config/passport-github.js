var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var GitHubUser = mongoose.model('GitHubUser');

var options = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
};

var github = new GitHubStrategy(options, function(accessToken, refreshToken, profile, done){
    var promise = GithubUser.findOne({ githubId: profile.id }).exec();
    promise.then(function(user) {
      if(!user){
        var user = new GitHubUser();
        user.githubId = profile.id;
        user.name = profile.username;
        user.newSessionDate();
        var promise = user.save();
        promise.then(function(user) {
          return done(null, user);
        })
        .catch(function(err){
          return done(err);
        })
      }
      return done(null, user);
    })
    .catch(function(err){
      return done(err);
    });
  }
);

passport.use(github);