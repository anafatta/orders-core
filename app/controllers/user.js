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
                    return res.status(200).send({ message: 'The user already exists' })
                }
            }).catch(error => res.status(500).send('Error 2' + error));
            var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                return salt;
            });
            bcrypt.hash(req.body.username, salt, null, function (err, hash) {
                if (err) {
                    return res.status(500).send({ message : "Unexpected Error" })
                }
                var new_user = {
                    email: req.body.username,
                    pwdhash: hash,
                    password:req.body.lastname, // NOT BE NULL
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    slevel: 0,
                    nro: req.body.nro // SEQUENCE
                    // OTHERS FIELDS?
                };
                db.ssecur_user.create(new_user).then(userCreated => {
                    var token = jwt.sign({ id: userCreated._id }, 'your_jwt_secret', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    return res.status(200).send({ auth: true, token: token })
                }).catch(error => res.status(500).send('Error 1' + error));
            });

        }
    },

    login(req, res) {
        att = {};
        if (req.body.username) {
            delete att.attributes
            att['attributes'] = ['nro', 'email', 'firstname', 'lastname', 'pwdhash'];
            if (!att['where']) { att['where'] = {} }
            att['where'] = { email: req.body.username }
            db.ssecur_user.findOne(att)
                .then(user => {
                    //VALIDATE PASSWORD
                    if (!user) {
                        return res.status(400).send({ auth: false, message: "Invalid user" })
                    }
                    bcrypt.compare(req.body.password, user.pwdhash, function (err, isValid) {
                        if (err) {
                            return res.status(500).send({ auth: false, message: "Unexpected Error" })
                        }
                        if (isValid) {
                            var token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
                                expiresIn: 86400 // expires in 24 hours
                            });
                            return res.status(200).send({ auth: true, token: token });
                        } else {
                            return res.status(400).send({ auth: false, message: "Invalid password" })
                        }
                    });
                }).catch(error => res.status(500).send(error));
        }
    },

    changePassword(req, res) {
        var username = req.body.username;
        var oldPassword = req.body.oldpassword;
        var newPassword = req.body.newpassword;
       console.log('    req.body.username:' + req.body.username + '    req.body.oldpassword:' + req.body.oldpassword + '    req.body.newpassword:' + req.body.newpassword)
        if (!username || !newPassword) {
            return res.status(412).send({ message: "Invalid user or new password" })
        }
        att = {};
        att['attributes'] = ['nro', 'email', 'firstname', 'lastname', 'pwdhash'];
        if (!att['where']) { att['where'] = {} }
        att['where'] = { email: username }
        db.ssecur_user.findOne(att).then(user => {
            if (user) {
                var isValid;
                console.log('  user.pwdhash: ' + user.pwdhash)
                if (user.pwdhash) {
                    isValid = bcrypt.compare(oldPassword, user.pwdhash, function (err, isValid) {
                        if (err) {
                            return res.status(500).send({ auth: false, message: "Unexpected Error" })
                        }
                        console.log('is valid1:' + isValid)
                        return isValid;
                    });
                } else {
                    //Pass Blank -- reset case
                    isValid = true;
                }
                  console.log('is valid1:' + isValid)
                if (isValid) {
                    var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                        return salt;
                    });
                    bcrypt.hash(newPassword, salt, null, function (err, hash) {
                        if (err) {
                            return res.status(500).send({ message: "Unexpected Error" })
                        }
                        db.ssecur_user.update({ pwdhash: hash }, { where: { email: username } })
                            .then(user => {
                                var token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
                                    expiresIn: 86400 // expires in 24 hours
                                });
                                return res.status(200).send({ auth: true, token: token });
                            })
                            .catch(error => res.status(500).send('Error updatinf user' + error));
                    });
                } else {
                    return res.status(400).send({ auth: false, message: "Invalid password" })
                }
            } else {
                return res.status(400).send({ auth: false, message: "Invalid user" })
            }
        }).catch(error => res.status(500).send('Error trying to find user ' + error));
    }


}
