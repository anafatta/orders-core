const db = require('../models');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = require('../config/passportConfig').SALT_WORK_FACTOR;


module.exports = {
    signup(req, res) {
        att = {};
        if (req.body.username) {
            delete att.attributes
            att['attributes'] = ['nro', 'email', 'firstname', 'lastname'];
            if (!att['where']) { att['where'] = {} }
            att['where'] = { email: req.body.username }
            db.ssecur_user.findOne(att).then(user => {
                if (user) {
                    res.status(200).send({ message: 'The user already exists' })
                }
            }).catch(error => res.status(500).send('Error 2' + error));
            var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                return salt;
            });
            bcrypt.hash(req.body.password, salt, null, function (err, hash) {
                if (err) return next(err);
                var new_user = {
                    email: req.body.username,
                    password: hash,
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    slevel: 0,
                    nro: req.body.nro
                };
                db.ssecur_user.create(new_user).then(userCreated => {
                    var token = jwt.sign({ id: userCreated._id }, 'your_jwt_secret', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.status(200).send({ auth: true, token: token })
                }).catch(error => res.status(500).send('Error 1' + error));
            });

        }
    },




    login(req, res) {
        att = {};
        if (req.body.username) {
            delete att.attributes
            att['attributes'] = ['nro', 'email', 'firstname', 'lastname'];
            if (!att['where']) { att['where'] = {} }
            att['where'] = { email: req.body.username }
            db.ssecur_user.findOne(att)
                .then(user => {
                    //VALIDATE PASSWORD
                    var token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.status(200).send({ auth: true, token: token })                        
                }).catch(error => res.status(500).send(error));
        }
    }

}
