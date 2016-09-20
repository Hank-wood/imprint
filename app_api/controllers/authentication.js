var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
// http://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose/
// http://mongoosejs.com/docs/api.html
module.exports.register = function(req, res) {
  if(!req.body.name || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.newSessionDate();
  var promise = user.save();
  promise.then(function(user) {
    var token = user.generateJwt();
    sendJSONresponse(res, 200, {
      "token" : token
    });
  })
  .catch(function(err){
    sendJSONresponse(res, 404, err);
  });

};

module.exports.login = function(req, res) {
  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info){
    if(err) {
      sendJSONresponse(res, 404, err);
      return;
    }

    if(user){
      user.newSessionDate();
      var promise = user.save();
      promise.then(function(user){
        var token = user.generateJwt();
        sendJSONresponse(res, 200, {
          "token" : token
        });
      })
      .catch(function(err){
        sendJSONresponse(res, 404, err);
      });
    } else {
      sendJSONresponse(res, 401, info);
    }
  })(req, res);
};

//http://mherman.org/blog/2013/11/10/social-authentication-with-passport-dot-js/#.V9-QP8IrJD8
//http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with.html
//http://blog.revathskumar.com/2014/06/express-github-authentication-with-passport.html
//https://www.jokecamp.com/tutorial-passportjs-authentication-in-nodejs/
//http://stackoverflow.com/questions/14188834/documentation-for-ensureauthentication-isauthenticated-passports-functions/14301657#14301657
//http://danialk.github.io/blog/2013/02/23/authentication-using-passportjs/
//https://scotch.io/tutorials/easy-node-authentication-setup-and-local
//https://blog.hyphe.me/token-based-authentication-with-node/
//https://www.tianmaying.com/tutorial/oAuth-login
//http://www.lingyong.me/blog/546ee759540f79925dd4c51f

//main point
//http://www.haomou.net/2014/08/13/2014_bare_token/
//http://haomou.net/2014/08/13/2014_web_token/

// module.exports.github = function(req, res) {

//   passport.authenticate('github', function(err, user, info){
//     if (err) {
//       sendJSONresponse(res, 404, err);
//       return;
//     }

//     if(user){
//       var token = user.generateJwt();
//       sendJSONresponse(res, 200, {
//         "token" : token
//       });
//     } else {
//       sendJSONresponse(res, 401, info);
//     }
//   })(req, res);

// };