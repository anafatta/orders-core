const depositosController = require('../controllers').depositos;
const vendController = require('../controllers').vend;
const clientesController = require('../controllers').clientes;
const expresosController = require('../controllers').expresos;
const articulosController = require('../controllers').articulos;
const pedcabController = require('../controllers').pedcab;


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
  
};