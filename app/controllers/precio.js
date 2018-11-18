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
        db.dolar.max('fecha').then (max_fecha => {
            att={};
            if (max_fecha){
                att['attributes']=['usd'];
                att['where']={fecha: max_fecha}
                dolar=db.dolar.findOne(att)
            }
        });

        att={};
        if (req.params.id_articulo){
            att['attributes']=['id', 'codfac'];
            att['where']={id: req.params.id_articulo}
        }
        db.articulo.findOne(att).then(articulo=>{
            att={};
            if (articulo.codfac){
                att['attributes']=['id', 'precio'];
                att['where']={codfac: articulo.codfac}
            }
            precios=db.precios.findOne(att)
        })
        
        att={};
        if (req.params.id_conpag){
            att['attributes']=['id', 'descuento', 'incremento'];
            att['where']={id: req.params.id_conpag}
        }
        conpag=db.conpag.findOne(att)
/*
        att={};
        if (req.params.id_cliente){
            att['attributes']=['id', 'descuento'];
            att['where']={id: req.params.id_cliente}
        }
        cliente=db.clientes.findOne(att)
*/
        precio_base    = (precios.precio * dolar.usd) 
        precio_conpag  = precio_base / conpag.descuento * conpag.descuento
 //       precio_cliente = precio_conpag / cliente.descuento

        return precio_conpag
        .then(conpag => res.status(201).send(precio_conpag))
        .catch(error => res.status(400).send(error));
    }
};
