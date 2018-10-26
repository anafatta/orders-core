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
        console.log('entro a la funcion de login');
        att={};
        console.log(req.body);
        if (req.body.username){
            delete att.attributes
            //att['attributes']=['id', 'username','firstname','lastname','role'];
            att['attributes']=['nro', 'email','firstname','lastname'];
            if (!att['where']){att['where']={}}  
            att['where']={email: req.body.username}
            db.ssecur_user.findOne(att)
            .then(user => {
                console.log('generando el token');
                    const token = jwt.sign(user, 'your_jwt_secret');
                    console.log('token generado : ' + token);
                res.status(201).send(user,token )})
        .catch(error => res.status(400).send(error));

       /*  db.ssecur_user.find({ where: { email: req.params.username } }).success(function (user) {
            console.log('entro a la success de DB');
            storedPwd = user ? user.password : '';
            db.ssecur_user.validatePassword(password, storedPwd, user, function (err, user) {
                if (err || !user) {
                    console.log('err o no user');
                    return res.status(400).json({
                        message: 'Something is not right',
                        user: user
                    });
                }
                console.log('setting the login');
                req.login(user, { session: false }, (err) => {
                    if (err) {
                        console.log('error en res.login');
                        res.send(err);
                    }
                    // generate a signed son web token with the contents of user object and return it in the response
                    console.log('generando el token');
                    const token = jwt.sign(user, 'your_jwt_secret');
                    console.log('token generado : ' + token);
                    return res.status(200).json({ user, token }); */
                //});
            };
        }
    }



/* console.log('ID de Cliente: '+ req.params.id)
        
        att={};
    
        if (req.params.id){
            delete att.attributes
            att['attributes']=['id', 'nom','cuit','codfac','razonsoc'];
            att['include']=[{model:db.clidir, as:'address',
                attributes:['id','dir','localidad','codpos','prov','expreso'],
                include:{model:db.expresos, as:'flete',
                attributes:['nom']}},
                {model:db.vend, as:'salesman',
                attributes:['id','nom']}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }

        //console.log('att = '+ JSON.stringify(att));

        return db.clientes.findOne(att)
        .then(clientes => res.status(201).send(clientes))
        .catch(error => res.status(400).send(error)); */