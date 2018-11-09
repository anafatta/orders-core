const db = require('../models');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var message = require('../config/messages.json');
const config = require('../config/config.json');


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
                    return res.status(200).send({auth: false, message: message.auth.user_already_exists })
                }
            }).catch(error => {
                console.log('error in user findOne: ' + error);
                res.status(500).send({auth: false, message : message.auth.unexpected_error})
            }
            );
            // FOR NOW THE PASSWORD ALWAYS SHOULD BE BLANK
             /* var salt = bcrypt.genSalt(config.salt_work_factor, function (err, salt) {
                return salt;
            });
            bcrypt.hash(req.body.username, salt, null, function (err, hash) {
                if (err) {
                    console.log('error in bcrypt hash: ' + error);
                    return res.status(500).send({ auth: false, message : message.auth.unexpected_error })
                } */
                var new_user = {
                    email: req.body.username,
                    pwdhash: '',
                    password:req.body.lastname, // NOT BE NULL
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    slevel: 0,
                    nro: req.body.nro // SEQUENCE
                    // OTHERS FIELDS?
                };
                db.ssecur_user.create(new_user).then(userCreated => {
                 /*    var token = jwt.sign({ id: userCreated._id }, config.jwt_secret, {
                        expiresIn: 86400 // expires in 24 hours
                    }); */
                    return res.status(200).send({ auth: false, message: message.user_created })
                }).catch(error => 
                    {
                        console.log('error in user create: ' + error)
                        res.status(500).send({auth: false, message:  message.auth.unexpected_error})
                    });
           // });

        }
    },

    login(req, res) {
        att = {};
        if (!req.body.username) {
            return res.status(400).send({ auth: false, message: message.auth.invalid_user })
        }
        if(!req.body.password){
            return res.status(400).send({ auth: false, message: message.auth.invalid_pass })
        }
        delete att.attributes
        att['attributes'] = ['nro', 'email', 'firstname', 'lastname', 'pwdhash'];
        if (!att['where']) { att['where'] = {} }
        att['where'] = { email: req.body.username }
        db.ssecur_user.findOne(att)
            .then(user => {
                //VALIDATE PASSWORD
                if (!user) {
                    return res.status(400).send({ auth: false, message: message.auth.invalid_user })
                }
                bcrypt.compare(req.body.password, user.pwdhash, function (err, isValid) {
                    if (err) {
                        console.log('error in bcrypt compare: ' + error)
                        return res.status(500).send({ auth: false, message: message.auth.unexpected_error })
                    }
                    if (isValid) {
                        var token = jwt.sign({ id: user.nro }, config.jwt_secret, {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        return res.status(200).send({ auth: true, token: token });
                    } else {
                        return res.status(400).send({ auth: false, message: message.auth.invalid_pass })
                    }
                });
            }).catch(error => {
                console.log('error in user findOne: ' + error)
                res.status(500).send({ auth: false, message: message.auth.unexpected_error })
            });
    },

    changePassword(req, res) {
        var username = req.body.username;
        var oldPassword = req.body.oldpassword;
        var newPassword = req.body.newpassword;
       console.log('    req.body.username:' + req.body.username + '    req.body.oldpassword:' + req.body.oldpassword + '    req.body.newpassword:' + req.body.newpassword)
        if (!username || !newPassword) {
            return res.status(412).send({auth:false,  message: message.auth.invalid_pass + ' or ' + message.auth.invalid_user})
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
                    isValid = bcrypt.compareSync(oldPassword, user.pwdhash);
                } else {
                    //Pass Blank -- reset case
                    isValid = true;
                }
                  console.log('is valid1:' + isValid)
                if (isValid) {
                    var salt = bcrypt.genSalt(config.salt_work_factor, function (err, salt) {
                        return salt;
                    });
                    bcrypt.hash(newPassword, salt, null, function (err, hash) {
                        if (err) {
                            console.log('error in bcrypt hash: ' + error)
                            return res.status(500).send({auth : false, message: message.auth.unexpected_error })
                        }
                        db.ssecur_user.update({ pwdhash: hash }, { where: { email: username } })
                            .then(user => {
                                var token = jwt.sign({ id: user.nro }, config.jwt_secret, {
                                    expiresIn: 86400 // expires in 24 hours
                                });
                                return res.status(200).send({ auth: true, token: token });
                            })
                            .catch(error => {
                                console.log('error in user update: ' + error)
                                res.status(500).send({ auth: false , message :  message.auth.unexpected_error})
                            });
                    });
                } else {
                    return res.status(400).send({ auth: false, message: message.auth.invalid_pass })
                }
            } else {
                return res.status(400).send({ auth: false, message: message.auth.invalid_user })
            }
        }).catch(error => {
            console.log('error in user findOne: ' + error)
            res.status(500).send({ auth: false , message :  message.auth.unexpected_error})
        });
    },
    protected(req, res) {

        console.log("entro a la funcion protegida")
        return res.status(200).send({ message : 'entro a la funcion protegida'});
    }


}
