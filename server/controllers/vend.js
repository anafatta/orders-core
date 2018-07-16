const db = require('../models');
//const Vend =require('../models').vend;

module.exports = {
    findAll(req, res){
        return db.vend.findAll({attributes: ['id', 'nom']})
        .then(vend => res.status(201).send(vend))
        .catch(error => res.status(400).send(error));
  
    },
};