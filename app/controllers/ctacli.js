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
    getEstadoVen(req,res){

        qq='SELECT' +
            ' CASE WHEN ctapencli.fve < now()::date-7 then \'1 RED\'' +
               ' WHEN (ctapencli.fve >= now()::date-7) and (ctapencli.fve <= now()::date) then \'2 YELLOW\''+
               ' WHEN ctapencli.fve > now()::date then \'3 GREEN\''+
            ' END AS estado, ' +     
            ' clientes.vend,  vend.nom, COUNT(*),'+
            ' SUM( (ctapencli.itot-ctapencli.ipen) * (CASE WHEN ctapencli.tip < 50 then 1 else -1 end)) ::decimal(16,2) as saldo' +
        ' FROM public.clientes, public.ctapencli, public.vend'+
        ' WHERE' + 
            ' clientes.codfac = ctapencli.cli AND'+
            ' vend.id = clientes.vend AND'+
            ' clientes.vend = ' +req.params.vend+ ' AND'+
            ' ctapencli.est = 0 AND' +
            ' ctapencli.tip > 0' +
        ' GROUP BY clientes.vend, vend.nom, estado'+
        ' ORDER BY estado'


        return  db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
        . then(ctapen => {
            console.log('ctapen====> ' + JSON.stringify(ctapen))
            res.status(201).send(ctapen)
        })
        .catch(error => res.status(400).send(error));
    },
    getSaldosxVen(req,res){
        qq='SELECT' +
        ' CASE WHEN ctapencli.fve < now()::date-7 then \'1 RED\'' +
           ' WHEN (ctapencli.fve >= now()::date-7) and (ctapencli.fve <= now()::date) then \'2 YELLOW\''+
           ' WHEN ctapencli.fve > now()::date then \'3 GREEN\''+
        ' END AS estado, ' +     
        ' clientes.codfac, clientes.nom, COUNT(*),'+
        ' SUM( (ctapencli.itot-ctapencli.ipen) * (CASE WHEN ctapencli.tip < 50 then 1 else -1 end)) ::decimal(16,2) as saldo' +
    ' FROM public.clientes, public.ctapencli, public.vend'+
    ' WHERE' + 
        ' clientes.codfac = ctapencli.cli AND'+
        ' vend.id = clientes.vend AND'+
        ' clientes.vend = ' +req.params.vend+ ' AND'+
        ' ctapencli.est = 0 AND' +
        ' ctapencli.tip > 0' +
    ' GROUP BY clientes.nom, clientes.codfac, estado'+
    ' ORDER BY clientes.nom, estado'

    return  db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
    . then(ctapen => {
        console.log('ctapen====> ' + JSON.stringify(ctapen))
        res.status(201).send(ctapen)
    })
    .catch(error => res.status(400).send(error));

    },
    getCtaPenxVen(req,res){

        qq='SELECT' +
        ' CASE WHEN ctapencli.fve < now()::date-7 then \'1 RED\'' +
                    ' WHEN (ctapencli.fve >= now()::date-7) and (ctapencli.fve <= now()::date) then \'2 YELLOW\''+
                    ' WHEN ctapencli.fve > now()::date then \'3 GREEN\''+
               ' END AS estado, ' +
          ' clientes.codfac,' +
          ' clientes.nom,' +
          ' ctapencli.nro,' +
          ' ctapencli.tip,' +
          ' ctapencli.fem,' +
          ' ctapencli.fve,' +
          ' ctapencli.obs,' +
          ' ((ctapencli.itot-ctapencli.ipen) * (CASE WHEN ctapencli.tip < 50 then 1 else -1 end)) ::decimal(16,2) as saldo' +
        ' FROM'+ 
          ' public.clientes,'+ 
          ' public.ctapencli,'+ 
          ' public.vend'+
        ' WHERE '+
          ' clientes.codfac = ctapencli.cli AND'+
          ' vend.id = clientes.vend and'+
          ' clientes.vend = ' +req.params.vend+ ' AND'+
          ' ctapencli.est = 0 AND' +
          ' ctapencli.tip > 0' +
        ' ORDER BY'+
          ' clientes.nom,'+
          ' ctapencli.tip,'+
          ' ctapencli.fve'


        return  db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
        . then(ctapen => {
            console.log('ctapen====> ' + JSON.stringify(ctapen))
            res.status(201).send(ctapen)
        })
        .catch(error => res.status(400).send(error));
    }

}
