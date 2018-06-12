const Deposito = require('../models').deposito;

module.exports = {
  create(req, res) {
    return Deposito
      .create({
        id:   req.body.id,
        nom:  req.body.nom,   
        tipo: req.body.tipo,
      })
      .then(deposito => res.status(201).send(deposito))
      .catch(error => res.status(400).send(error));
  },
};