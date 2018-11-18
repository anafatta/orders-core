const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    find(req,res){
        att={};
        att['attributes']=['id', 'nom'];
        att['order']=[['nom','ASC']]
        console.log('att = '+ JSON.stringify(att));
        return db.conpag.findAll(att)
        .then(conpag => res.status(201).send(conpag))
        .catch(error => res.status(400).send(error));

    },
    findOne(req,res){
        console.log('ID de conpag: '+ req.params.id)
        
        att={};
    
        if (req.params.id){
            att['attributes']=['id', 'nom','descuento','incremento'];
            att['where']={id: req.params.id}
        }

        return db.conpag.findOne(att)
        .then(conpag => res.status(201).send(conpag))
        .catch(error => res.status(400).send(error));
    }
};
