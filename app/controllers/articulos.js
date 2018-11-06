const db = require('../models');
const Request = require("request");
/*const Articulos = require('../models').articulo;
const ItemData = require('../models').itemdata;
const Variante = require('../models').variante;
*/
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/*ItemData.belongsTo(Articulos,{
    as:'art',
    foreignKey:'articulo',
})

ItemData.belongsTo(Variante,{
    //    as:'col',
        foreignKey:'color',
    })
    
Articulos.hasMany(ItemData,{
    foreignKey:'articulo',
})

Variante.hasMany(ItemData,{
//    as:'col',
    foreignKey:'color',
})
*/

module.exports={
    find(req,res){
        console.log('id: '+ req.params.id)
        console.log('nom: '+ req.params.nom)

        att={};
        att['attributes']=['id', 'codfac', 'nom'];
      
        if (req.params.nom){
            if (!att['where']){att['where']={}}  
            att['where']['nom']={[Op.iLike]: '%'+req.params.nom+'%'}
            att['limit']= 5 
        }
        att['order']=[['nom','ASC']]
        console.log('att = '+ JSON.stringify(att));
        return db.articulo.findAll(att)
        .then(articulo => res.status(201).send(articulo))
        .catch(error => res.status(400).send(error));
    },

    findOne(req,res){
        console.log('id: '+ req.params.id)
        att={};
        att['attributes']=['id', 'codfac', 'nom'];
      
        if (req.params.id){
            att['attributes']=['id', 'codfac', 'nom'];
            att['include']=[{model:db.itemdata,include:[{model:db.variante}]}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }

        //console.log('att = '+ JSON.stringify(att));
        return db.articulo.findOne(att)
        .then(articulo => {

            ROOT_URL = 'https://simsiroglu.com.ar/sim/wp-content/themes/shk/productgallery.php?action=getimg';            

            var product={
                art_id    : articulo.id,
                codfac    : articulo.codfac,
                nom       : articulo.nom,
                variantes : []
            }
            console.log("articulo.codfac = " + articulo.codfac)
            var promesas= []
            for (var i in articulo.itemdata){
                promesas[i] = new Promise(function(resolve, reject) {
                    
                    //console.log('&codigo=' + product.codfac + '&color=' + articulo.itemdata[i].variante.codigo)
                    Request.get(this.ROOT_URL + '&codigo=' + product.codfac + '&color=' + articulo.itemdata[i].variante.codigo, (error, response, body) => {
                    //Request.get(this.ROOT_URL + '&codigo=' + '102' + '&color=' + '100', (error, response, body) => {
                        if(error) {
                           reject(error)
                         } 

                        product.variantes.push({
                            itemdata_id : articulo.itemdata[i].id,
                            codigo      : articulo.itemdata[i].variante.codigo,
                            nom         : articulo.itemdata[i].variante.nom,
                            imagen      : body
                        })
                        resolve(articulo.itemdata[i].id)                              
                    })
                })
            }

            Promise.all(promesas)
            .then(function(results) {
                // console.log(results)
                res.status(201).send(product);
               }).catch(function(error) {
                 console.log(error);
                 res.status(400).send(error)     
               });  
        })
    }

/*
        return db.articulo.findAll(att)
        .then(articulos => {
            const resObj=articulos.map(articulo => {
              return Object.assign(
                {},
                {
                    art_id    : articulo.id,
                    nom       : articulo.nom,
                    //items     : articulo.itemdata[0].variante.nom
                    variantes : articulo.itemdata.map(itemd => {
                        return Object.assign(
                            {},
                            {
                                var_id: itemd.variante.id,
                                nom:    itemd.variante.nom
                            }
                        )         
                    })
                }) 
            })
            res.status(201).json(resObj)
        })    
        .catch(error => res.status(400).send(error));
*/        
//    },
/*    findyy(req,res){
        console.log('id: '+ req.params.id)
        console.log('estoy en find yy ')

        return Variante.findAll({
            include: [{model: ItemData}],
            where:{id: req.params.id}
        })
        .then(variante => res.status(201).send(variante))      
        .catch(error => res.status(400).send(error));
    },
*/    
};