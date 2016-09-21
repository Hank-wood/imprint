var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var githubUserSchema = new mongoose.Schema({
  githubId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  sessionDates: {
    type: [Date]
  }
});

githubUserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    githubId: this.githubId,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

githubUserSchema.methods.newSessionDate = function() {
  this.sessionDates.push(new Date());
}
mongoose.model('GitHubUser', githubUserSchema);