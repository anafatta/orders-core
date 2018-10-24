const db = require('../models');

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

/* exports.signUp = function(req, res) {
    db.ssecure_user.find({where:{username: req.username}}).success(function(user){
        if(!user) {
            db.ssecure_user.create({username:req.body.username, password:req.body.password}).error(function(err) {
                console.log(err);
            });
        } else {
            res.redirect('/signup')
        }
    })
    res.redirect('/')
} */

module.exports = {
    login(req, res) {
        db.ssecur_user.find({ where: { email: req.params.username } }).success(function (user) {
            storedPwd = user ? user.password : '';
            db.ssecur_user.validatePassword(password, storedPwd, user, function (err, user) {
                if (err || !user) {
                    return res.status(400).json({
                        message: 'Something is not right',
                        user: user
                    });
                }
                req.login(user, { session: false }, (err) => {
                    if (err) {
                        res.send(err);
                    }
                    // generate a signed son web token with the contents of user object and return it in the response
                    const token = jwt.sign(user, 'your_jwt_secret');
                    return res.status(200).json({ user, token });
                });
            });
        })
    }
}