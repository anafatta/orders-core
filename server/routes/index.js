const depositosController = require('../controllers').depositos;
const vendController = require('../controllers').vend;
const clientesController = require('../controllers').clientes;
const expresosController = require('../controllers').expresos;
const articulosController = require('../controllers').articulos;
const pedcabController = require('../controllers').pedcab;
const userController = require('../controllers').user;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Pedidos API!'+ req.param('ven'),
  }));

  //app.post('/api/depositos', depositosController.create);

  app.get('/api/vend', vendController.findAll);

  app.get('/api/clientes', clientesController.find);
  app.get('/api/clientes/name/:nom', clientesController.find);
  app.get('/api/clientes/vendedor/:ven', clientesController.find);
  app.get('/api/clientes/vendedor/:ven/name/:nom', clientesController.find);
  app.get('/api/clientes/id/:id', clientesController.findOne);
  app.post('/api/clientes', clientesController.post);
  app.put('/api/clientes/id/:id', clientesController.updateClientes);

  app.get('/api/articulos', articulosController.find);
  app.get('/api/articulos/name/:nom', articulosController.find);
  app.get('/api/articulos/id/:id', articulosController.findOne);
  //app.get('/api/articulos/item/:id', articulosController.findyy);

  app.get('/api/expresos', expresosController.find);
  app.get('/api/expresos/id/:id', expresosController.findOne);

  app.get('/api/pedcab/vendedor/:ven', pedcabController.find);
  app.get('/api/pedcab/id/:id', pedcabController.findOne);
  app.post('/api/pedcab', pedcabController.postOne);

  //AUTENTICATION

  //app.get('/home', user.isAuthenticated, home.homepage) // CHANGE


  //app.get('/logout', user.destrotSession);
  //app.get('/signup', user.signup);
  //app.post('/register', user.register);


/* POST login. */
  app.post('api/login', userController.login);

/* function (req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
     req.login(user, {session: false}, (err) => {
         if (err) {
             res.send(err);
         }
         // generate a signed son web token with the contents of user object and return it in the response
         const token = jwt.sign(user, 'your_jwt_secret');
         return res.json({user, token});
      });
  })
  (req, res);
}); */

}