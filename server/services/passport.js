/** Dependencies */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/** User Model Plugged In */
var User = require('../models/users');

/** Passport */
passport.use(new LocalStrategy({
    emailField: 'username',
    passwordField: 'password'
},
    function (username, password, done) {
        console.log('Logging In...');
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); console.log(user); }
            if (!user.verifyPassword(password)) {
                return done(null, user);
            }
            return done(null, user);
        });
    }));

passport.serializeUser(function (user, done) {
    console.log('serializing ', user)
    done(null, user._id);
});
passport.deserializeUser(function (_id, done) {
    console.log('deserializing ', _id);
    User.findById(_id, function (err, user) {
        console.log(user);
        done(err, user);
    });
});

module.exports = passport;