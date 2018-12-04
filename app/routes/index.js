const depositosController = require('../controllers').depositos;
const vendController = require('../controllers').vend;
const clientesController = require('../controllers').clientes;
const expresosController = require('../controllers').expresos;
const provinciaController = require('../controllers').provincia;
const conpagController = require('../controllers').conpag;
const precioController = require('../controllers').precio;
const articulosController = require('../controllers').articulos;
const pedcabController = require('../controllers').pedcab;
const userController = require('../controllers').user;
const messageController = require('../controllers').messages;
const passport = require('passport');
const ctacliController = require('../controllers').ctacli;
const packingController = require('../controllers').packing;

module.exports = (app) => {
  var imagenes=articulosController.loadUrls()
  // console.log("======================IMAGENES")
  // console.log(imagenes)

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Pedidos API!'+ req.param('ven'),
  }));

  //app.post('/api/depositos', depositosController.create);

  app.get('/api/vend', vendController.findAll);
  app.get('/api/vend/:userId', vendController.findOne);

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
  app.get('/api/articulos/id/:id/:id_pack', articulosController.findOne);
  app.get('/api/packings/id/:id_art', packingController.getPackingxArt);
  //app.get('/api/articulos/item/:id', articulosController.findyy);

  app.get('/api/expresos', expresosController.find);
  app.get('/api/expresos/id/:id', expresosController.findOne);

  app.get('/api/provincia', provinciaController.find);
  app.get('/api/provincia/id/:id', provinciaController.findOne);

  app.get('/api/conpag', conpagController.find);
  app.get('/api/conpag/id/:id', conpagController.findOne);

  app.get('/api/precio/id_articulo/:id_articulo/id_conpag/:id_conpag/id_cliente/:id_cliente', precioController.findOne);

  // PEDIDOS
  app.get('/api/pedcab/vendedor/:ven', pedcabController.find);
  app.get('/api/pedcab/id/:id', pedcabController.findOne);
  app.post('/api/pedcab', pedcabController.postOne);
  
  
  //PEDIDOS X ESTADO
  
  app.get('/api/pedcab/estado/:ven',pedcabController.findByVenGroupByEstado);
  app.get('/api/pedcab/estado/est/:est', pedcabController.findbyEstado);
  app.put('/api/pedcab/estado/id/:id',pedcabController.putEstado);
  app.get('/api/pedcab/estado/:est/vendedor/:ven', pedcabController.findbyEstadoxVen);
  
  //AUTENTICATION
  app.get('/api/users', userController.findAll)
  app.post('/api/login', userController.login);
  app.post('/api/signup', userController.signup);
  app.put('/api/changepass', userController.changePassword);
  app.post('/api/protected', passport.authenticate('jwt', {session: false}), userController.protected );

  //MESSAGES
  app.post('/api/message', messageController.saveMessageFromTo);
  app.get('/api/messages/:to', messageController.getMessagesTo);

  //CTA. CTE. CLIENTES
  app.get('/api/ctacli/cli/:id_cli', ctacliController.getCtaPenxCli);      // detalle x cliente 
  app.get('/api/ctacli/cli/:id_cli/:fve', ctacliController.getCtaPenxCli); // detalle x cliente vencido a :fve
  app.get('/api/ctacli/det0/ven/:vend', ctacliController.getEstadoVen);    // saldos generales  x vendedor
  app.get('/api/ctacli/det1/ven/:vend', ctacliController.getSaldosxVen);   // saldos x cliente  x vendedor
  app.get('/api/ctacli/det2/ven/:vend', ctacliController.getCtaPenxVen);   // detalle x cliente x vendedor

}