const Articulos = require('../models').articulo;
const ItemData = require('../models').itemdata;
const Variante = require('../models').variante;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

ItemData.belongsTo(Articulos,{
    as:'art',
    foreignKey:'articulo',
})
Articulos.hasMany(ItemData,{
    foreignKey:'articulo',
})

ItemData.belongsTo(Variante,{
//    as:'col',
    foreignKey:'color',
})

Variante.hasMany(ItemData,{
//    as:'col',
    foreignKey:'color',
})


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
            att['attributes']=['id', 'nom'];
            att['include']=[{model:ItemData,include:[{model:Variante}],attribute:['id','nom']}]
            //att['include']=[{model:ItemData},]
            //att['include']['include']=[{model:Color}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }


        console.log('att = '+ JSON.stringify(att));
        return Articulos.findAll(att)
        .then(articulos => res.status(201).send(articulos))
        .catch(error => res.status(400).send(error));
    },
    findxx(req,res){
        console.log('id: '+ req.params.id)
        console.log('estiy en find xx ')

        return Articulos.findAll({
            include: [
              {
                model: ItemData,
/*               include: [
                  {
                    model: Color
                  }
                ]
*/              }
            ],
            where:{id: req.params.id}
          })
        .then(articulos => res.status(201).send(articulos))
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