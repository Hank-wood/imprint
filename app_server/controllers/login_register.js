/* GET 'home' page */
module.exports.home = function(req, res) {
    res.render('home', {
        pageHeader: {
            title: 'Cerberus',
            strapline: 'MEAN Stack Login & Register System!'
        }
    });
};

/* GET 'login' page */
module.exports.login = function(req, res) {
    res.render('login', {
        pageHeader: {
            title: 'Login',
            strapline: 'Please Enter Your Email and Password, Login Your Account!'
        }
    });
};

/* GET 'register' page */
module.exports.register = function(req, res) {
    res.render('register', {
        pageHeader: {
            title: 'Register',
            strapline: 'Please Enter Your Email and Password, Register A New Account!'
        }
    });
};