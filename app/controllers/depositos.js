const db = require('../models');

module.exports = {
  create(req, res) {
    return db.deposito
      .create({
        id:   req.body.id,
        nom:  req.body.nom,   
        tipo: req.body.tipo,
      })
      .then(deposito => res.status(201).send(deposito))
      .catch(error => res.status(400).send(error));
  },
};