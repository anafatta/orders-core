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
        att = {};
        att['attributes'] = ['nro', 'email', 'firstname', 'lastname', 'pwdhash'];
        if (!att['where']) { att['where'] = {} }
        att['where'] = { nro: jwtPayload.id }
        db.ssecur_user.findOne(att)
            .then(user => {
                console.log(user)
                console.log(jwtPayload)
                return cb(null, user);
            })
            .catch(err => {
                console.log('error' + err)
                return cb(err);
            });
    }
));