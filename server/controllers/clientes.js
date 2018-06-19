const Clientes = require('../models').clientes;
const CliDir = require('../models').clidir;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

CliDir.belongsTo(Clientes,{
    foreignKey:'idcli',
})

Clientes.hasMany(CliDir,{
    foreignKey:'idcli',
})


module.exports={
    find(req,res){
        console.log('nro de vendedor: '+ req.params.ven)
        console.log('nom: '+ req.params.nom)

        att={};
        att['attributes']=['id', 'nom'];
      
        if (req.params.ven){
            att['where']={vend:req.params.ven}
        }
      
        if (req.params.nom){
            //att['where']={vend:req.params.ven, nom: {[Op.iLike]: '%'+req.params.nom+'%'}}
            if (!att['where']){att['where']={}}  
            att['where']['nom']={[Op.iLike]: '%'+req.params.nom+'%'}
            att['limit']= 5 
        }

        if (req.params.id){
            delete att.attributes
            att['include']=[{model:CliDir}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }


        console.log('att = '+ JSON.stringify(att));

        return Clientes.findAll(att)
        .then(clientes => res.status(201).send(clientes))
        .catch(error => res.status(400).send(error));
    },
};