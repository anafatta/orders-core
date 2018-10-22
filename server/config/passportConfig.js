const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const db = require('../models');

//Serialize Sessions
passport.serializeUser(function (user, done) {
    done(null, user);
});

//Deserialize Sessions
passport.deserializeUser(function (user, done) {
    db.ssecur_user.find({ where: { id: user.id } }).success(function (user) {
        done(null, user);
    }).error(function (err) {
        done(err, null)
    });
});
// For Authentication
passport.use(new localStrategy(usernamefield = 'email',
    (username, password, done) => {
        db.ssecur_user.find({where: {email: username}}).success(function(user){
            storedPwd = user ? user.password : ''
            isMatch = db.ssecur_user.validatePassword(password, storedPwd, done, user)
        });
    }));