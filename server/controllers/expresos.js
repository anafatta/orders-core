const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    find(req,res){
        att={};
        att['attributes']=['id', 'nom'];
        att['order']=[['nom','ASC']]
        console.log('att = '+ JSON.stringify(att));
        return db.expresos.findAll(att)
        .then(expreso => res.status(201).send(expreso))
        .catch(error => res.status(400).send(error));

    },
    findOne(req,res){
        console.log('ID de expreso: '+ req.params.id)
        
        att={};
    
        if (req.params.id){
            att['attributes']=['id', 'nom','dir','localidad','codpos','prov','tel','cuit','horario'];
            att['where']={id: req.params.id}
        }

        return db.expresos.findOne(att)
        .then(expreso => res.status(201).send(expreso))
        .catch(error => res.status(400).send(error));
    }
};
