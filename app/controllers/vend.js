const db = require('../models');
//const Vend =require('../models').vend;

module.exports = {
    findAll(req, res){
        return db.vend.findAll({attributes: ['id', 'nom'],'order':[['nom','ASC']]})
        .then(vend => res.status(201).send(vend))
        .catch(error => res.status(400).send(error));
        att['order']=[['nom','ASC']]
    },

    findOne(req, res){
    delete att.attributes
    att['attributes'] = ['id', 'nom'];
    if (!att['where']) { att['where'] = {} }
    att['where'] = { usr : req.params.userId }
    db.vend.findOne(att)
        .then(seller =>  res.status(201).send(seller))
        .catch(error => res.status(400).send(error));
    },
};