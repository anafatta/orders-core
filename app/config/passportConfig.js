const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;
const db = require('../models');
const config = require('./config.json');

passport.use(new JWTStrategy({
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.jwt_secret // Put this value in a environmet var
    },
    function (jwtPayload, cb) {
        return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));