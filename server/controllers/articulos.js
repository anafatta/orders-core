const Articulos = require('../models').articulo;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    find(req,res){
        console.log('id: '+ req.params.id)
        console.log('nom: '+ req.params.nom)

        att={};
        att['attributes']=['id', 'nom'];
      
        if (req.params.nom){
            if (!att['where']){att['where']={}}  
            att['where']['nom']={[Op.iLike]: '%'+req.params.nom+'%'}
            att['limit']= 5 
        }

        if (req.params.id){
            delete att.attributes
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }


        console.log('att = '+ JSON.stringify(att));

        return Articulos.findAll(att)
        .then(articulos => res.status(201).send(articulos))
        .catch(error => res.status(400).send(error));
    },
};