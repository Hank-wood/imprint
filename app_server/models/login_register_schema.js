var mongoose = require('mongoose');

var users_Inf_Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('Location', users_Inf_Schema);