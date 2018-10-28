const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db = require('../models');

/* //Serialize Sessions
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
}); */
// For Authentication
/* passport.use(new localStrategy((username, password, done) => {
        db.ssecur_user.find({where: {email: username}}).success(function(user){
            storedPwd = user ? user.password : ''
            isMatch = db.ssecur_user.validatePassword(password, storedPwd, done, user)
        });
    }));
 */


passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));