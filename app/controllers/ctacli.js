const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    getCtaPenxCli(req,res){
        att={};   
        if (req.params.id_cli){
            return db.clientes.findByPk(req.params.id_cli).then (cliente=>{
                console.log('db.clientes.findByPk ====> ' + JSON.stringify(cliente))
                att['attributes']=['id', 'cli','nro','tip','tiptxt','fem','fve','obs','itot','ipen','est'];
                att['where']={cli:cliente.codfac , est:0}
                if (req.params.fve){
                    att['where']['fve']={[Op.lte]: req.params.fve}
                }
                console.log('att =' + JSON.stringify(att))
                db.ctapencli.findAll(att)
                .then(ctapen => {
                    console.log('ctapen====> ' + JSON.stringify(ctapen))
                    res.status(201).send(ctapen)
                })
                .catch(error => res.status(400).send(error));
            })
           .catch(error => res.status(401).send(error));
        }
        //res.status(400).send(error)
    },
    getCtaPenxClixVen(req,res){
        att={};   
        if (req.params.id_cli){
            return db.clientes.findByPk(req.params.id_cli).then (cliente=>{
                console.log('db.clientes.findByPk ====> ' + JSON.stringify(cliente))
                att['attributes']=['id', 'cli','nro','tip','tiptxt','fem','fve','obs','itot','ipen','est'];
                if (req.params.fve){
                    att['where']['fve']={[Op.lte]: req.params.fve}
                }
//                if (!att['where']){att['where']={}}

                att['where']={cli:cliente.codfac , est:0,}
 
                console.log('att =' + JSON.stringify(att))
                db.ctapencli.findAll(att)
                .then(ctapen => {
                    console.log('ctapen====> ' + JSON.stringify(ctapen))
                    res.status(201).send(ctapen)
                })
                .catch(error => res.status(400).send(error));
            })
           .catch(error => res.status(401).send(error));
        }
        //res.status(400).send(error)
    }
}
