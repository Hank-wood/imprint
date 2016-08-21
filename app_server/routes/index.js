var express = require('express');
var router = express.Router();
var ctrlLR = require('../controllers/login_register');

/* Home page */
router.get('/', ctrlLR.home);

/* Login page */
router.get('/login', ctrlLR.login);

/* Register page */
router.get('/register', ctrlLR.register);

module.exports = router;
