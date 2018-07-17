const db = require('../models');
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
        att['attributes']=['id', 'nom'];
      
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
        att['attributes']=['id', 'nom'];
      
        if (req.params.id){
//            delete att.attributes
            att['attributes']=['id', 'nom'];
            // ok att['include']=[{model:ItemData,include:[{model:Variante}]}]
            att['include']=[{model:db.itemdata,include:[{model:db.variante}]}]
            //att['include']=[{model:ItemData},]
            //att['include']['include']=[{model:Color}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }

        console.log('att = '+ JSON.stringify(att));

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
    },
    findyy(req,res){
        console.log('id: '+ req.params.id)
        console.log('estoy en find yy ')

        return Variante.findAll({
            include: [{model: ItemData}],
            where:{id: req.params.id}
        })
        .then(variante => res.status(201).send(variante))      
        .catch(error => res.status(400).send(error));
    },
};