var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/auth/github', ctrlAuth.github);
router.get('/auth/github/callback',
    passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

module.exports = router;
