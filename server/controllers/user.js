const db = require('../models');
const jwt = require('jsonwebtoken');

/* exports.IsAuthenticated = function (req, res, next) {
    if (req.IsAuthenticated()) {
        next();
    } else {
        next(new Error(401));
    }
}

exports.destroySession = function (req, res, next) {
    req.logOut();
    req.session.destroy();
    req.redirect("/");
} */
module.exports = {
/*   signup(req, res) {
    att = {};
    console.log(req.body);
    if (req.body.username) {
        delete att.attributes
        //att['attributes']=['id', 'username','firstname','lastname','role'];
        att['attributes'] = ['nro', 'email', 'firstname', 'lastname'];
        if (!att['where']) { att['where'] = {} }
        att['where'] = { email: req.body.username }
        
        db.ssecur_user.findOne(att).then(user => {
            if (!user) {
                var user = {
                    email: req.body.username,
                    password: req.body.password,
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    slevel :0,
                    nro:25
                }
                console.log('no user');
               // return db.sequelize.transaction(transaction => {
                db.ssecure_user.create(new_user).then(userCreated => {
                    //VALIDATE PASSWORD
                    console.log(userCreated);
                    console.log('generando el token');
                    //const token = jwt.sign(user, 'your_jwt_secret');
                    var token = jwt.sign({ id: userCreated._id }, 'your_jwt_secret', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    console.log(token);
                    console.log('token generado : ' + token);
                    res.status(200).send({ auth: true, token: token })
                }).catch(error => res.status(500).send('Error 1' + error));
           // })
            } else {
                res.status(200).send({ message: 'The user already exists' })
            }
        }).catch(error => res.status(500).send( 'Error 2' + error));
    }}, */


    signup(req, res) {
        att = {};
        console.log(req.body);
         if (req.body.username) {
            delete att.attributes
            //att['attributes']=['id', 'username','firstname','lastname','role'];
            att['attributes'] = ['nro', 'email', 'firstname', 'lastname'];
            if (!att['where']) { att['where'] = {} }
            att['where'] = { email: req.body.username }
            db.ssecur_user.findOne(att).then(user => {
                if (user) {
                    res.status(200).send({ message: 'The user already exists' })
                }
            }).catch(error => res.status(500).send( 'Error 2' + error)); 
            console.log('no user');
            var new_user = {
                        email: req.body.username,
                        password: req.body.password,
                        lastname: req.body.lastname,
                        firstname: req.body.firstname,
                        slevel :0,
                        nro:req.body.nro
                    }

                   // return db.sequelize.transaction(transaction => {
                    db.ssecur_user.create(new_user).then(userCreated => {
                        //VALIDATE PASSWORD
                        console.log(userCreated);
                        console.log('generando el token');
                        //const token = jwt.sign(user, 'your_jwt_secret');
                        var token = jwt.sign({ id: userCreated._id }, 'your_jwt_secret', {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        console.log(token);
                        console.log('token generado : ' + token);
                        res.status(200).send({ auth: true, token: token })
                    }).catch(error => res.status(500).send('Error 1' + error));
               // })
                } } ,       
     


    login(req, res) {
        console.log('entro a la funcion de login');
        att = {};
        console.log(req.body);
        if (req.body.username) {
            delete att.attributes
            //att['attributes']=['id', 'username','firstname','lastname','role'];
            att['attributes'] = ['nro', 'email', 'firstname', 'lastname'];
            if (!att['where']) { att['where'] = {} }
            att['where'] = { email: req.body.username }
            db.ssecur_user.findOne(att)
                .then(user => {
                    //VALIDATE PASSWORD
                    console.log(user);
                    console.log('generando el token');
                    //const token = jwt.sign(user, 'your_jwt_secret');
                    var token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    console.log(token);
                    console.log('token generado : ' + token);
                    res.status(200).send({ auth: true, token: token })
                        .catch(error => res.status(500).send(error));
                });
        }
    }

}
