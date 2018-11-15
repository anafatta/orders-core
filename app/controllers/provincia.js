const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    find(req,res){
        att={};
        att['attributes']=['id', 'nom'];
        att['order']=[['nom','ASC']]
        console.log('att = '+ JSON.stringify(att));
        return db.provincia.findAll(att)
        .then(provincia => res.status(201).send(provincia))
        .catch(error => res.status(400).send(error));

    },
    findOne(req,res){
        console.log('ID de provincia: '+ req.params.id)
        
        att={};
    
        if (req.params.id){
            att['attributes']=['id', 'nom'];
            att['where']={id: req.params.id}
        }

        return db.provincia.findOne(att)
        .then(provincia => res.status(201).send(provincia))
        .catch(error => res.status(400).send(error));
    }
};
