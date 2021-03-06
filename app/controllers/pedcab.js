const db = require('../models');
const Request = require("request");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    find(req,res){
        console.log('nro de vendedor: '+ req.params.ven)

        att={};
        att['attributes']=['id', 'nro','fem'];
        if (req.params.ven){
            att['include']=[{model:db.clientes,attributes:['id','nom']},
                            {model:db.vend,attributes:['id','nom']},
                            {model:db.clidir, as:'address',
                                attributes:['id','dir','localidad','codpos','prov']}]
            att['where']={ven:req.params.ven}
            att['where']['est']={[Op.lt]:20}
            att['order']=[['est','ASC'],['id','ASC']]
        }

        console.log('att = '+ JSON.stringify(att));

        return db.pedcab.findAll(att)
        .then(pedcab => res.status(201).send(pedcab))
        .catch(error => res.status(400).send(error));
    },
    findByVenGroupByEstado(req,res){

    qq='SELECT pedcab.est, pedest.nom, count(*) ' +
       'FROM public.clientes, public.pedcab, public.pedest ' +
       'WHERE clientes.id = pedcab.cli AND ' +
            'clientes.vend = ' + req.params.ven + ' AND ' +
            'pedcab.est = pedest.id AND ' +
//            'pedcab.fem > now()::date-60 AND ' +
            'pedcab.est < 20 ' +
        'GROUP BY pedcab.est, pedest.nom '
        return  db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
        . then(ctapen => {
            console.log('ctapen====> ' + JSON.stringify(ctapen))
            res.status(201).send(ctapen)
        })
        .catch(error => res.status(400).send(error));
    },

    findbyEstadoxVen (req,res){
        console.log('nro de vendedor: '+ req.params.ven)
        console.log('nro de estado: '+ req.params.est)

        att={};
        att['attributes']=['id', 'nro','fem','est'];
        if (req.params.ven){
            att['include']=[{model:db.clientes,attributes:['id','nom']},
                            {model:db.vend,attributes:['id','nom']},
                            {model:db.clidir, as:'address',
                                attributes:['id','dir','localidad','codpos','prov']}]
                                      
            att['where']={ven:req.params.ven}
            att['where']['est']={[Op.eq]:req.params.est}
            att['order']=[['est','ASC'],['id','ASC']]
        }

        console.log('att = '+ JSON.stringify(att));

        return db.pedcab.findAll(att)
        .then(pedcab => res.status(201).send(pedcab))
        .catch(error => res.status(400).send(error));
    },

    findbyEstado(req,res){
        console.log('nro de vendedor: '+ req.params.ven)
        console.log('nro de vendedor: '+ req.params.est)

        att={};
        att['attributes']=['id', 'nro','fem','est'];
        att['include']=[{model:db.clientes,attributes:['id','nom']},
                        {model:db.vend,attributes:['id','nom']},
                        {model:db.clidir, as:'address',
                         attributes:['id','dir','localidad','codpos','prov']}]
        att['where']={est:req.params.est}
        // att['where']['est']={[Op.eq]:req.params.est}
        att['order']=[['est','ASC'],['id','ASC']]
    

        console.log('att = '+ JSON.stringify(att));

        return db.pedcab.findAll(att)
        .then(pedcab => res.status(201).send(pedcab))
        .catch(error => res.status(400).send(error));
    },

    findOne(req,res){
        console.log('id: '+ req.params.id)
        att={};
        att['attributes']=['id', 'nro','fem','ven','cli','conven','clidir','id_pack'];
        if (req.params.id){
            att['include']=[
                {model:db.clientes,attributes:['nom']},
                {model:db.vend,attributes:['nom']},
                {model:db.clidir, as:'address',
                  attributes:['id','dir','localidad','codpos','prov']},
                {model:db.peditm, 
                  attributes:['itemdata','can_ped','can_aut','pre_ped','pre_aut'],
                  include:[{model:db.itemdata,attributes:['id'],
                  include:[{model:db.articulo, as:'art', attributes:['codfac','nom']},
                  {model:db.variante,attributes:['codigo','nom']}],
                  }]
                }    
            ]
            att['where']={id:req.params.id}
        }

        console.log('att = '+ JSON.stringify(att));
        return db.pedcab.findOne(att).then (pedcab => {
            //let pedido=JSON.parse(pedcab)
            //console.log('TIPO = ' + typeof(pedcab))
            
            //pedcab.peditms.forEach(element => {
                //console.log('element antes = '+ JSON.stringify(element));
                //console.log('TIPO = ' + typeof(element))
                //for (var i in pedcab.peditms){
                //    pedcab.peditms[i].img = "**************";
                //console.log('Imagaen despues = '+ JSON.stringify(pedcab.peditms[i]));
                /*console.log('Variante despues = '+ JSON.stringify(xx));
                console.log('xx solo = '+ xx);
                */
               ROOT_URL = 'https://simsiroglu.com.ar/sim/wp-content/themes/shk/productgallery.php?action=getimg';            
            
                    const ped={
                            id: pedcab.id,
                            nro: pedcab.nro,
                            fem: pedcab.fem,
                            ven: pedcab.ven,
                            cli: pedcab.cli,
                            conven:pedcab.conven,
                            clidir:pedcab.clidir,
                            cliente:pedcab.cliente,
                            vend:pedcab.vend,
                            address:pedcab.address,
                            peditms:[]
                         } 
                                
                        var promesas= []
                        for (var i in pedcab.peditms){
                            let item = pedcab.peditms[i]
                            console.log('Articulo= ' + item.itemdatum.art.codfac+' Color '+ item.itemdatum.variante.codigo)
                            // Request.get(this.ROOT_URL + '&codigo=' + item.itemdatum.art.codfac + '&color=' + item.itemdatum.variante.codigo, (error, response, body) => {
                                promesas[i] = new Promise(function(resolve, reject) {
                                    Request.get(this.ROOT_URL + '&codigo=' + '102' + '&color=' + '100', (error, response, body) => {
                                if(error) {
                                    //return console.log(error);
                                    reject(error)
                                } 
                                //console.log('body = '+ JSON.stringify(body));
                                //console.log('error = '+ JSON.stringify(error));
                                // console.log('response = '+ JSON.stringify(response));
                                console.log(item.itemdata + ' ' + ped.id)                                
                                ped.peditms.push({
                                    "itemdata"  : item.itemdata,
                                    "can_ped"   : item.can_ped,
                                    "can_aut"   : item.can_aut,
                                    "pre_ped"   : item.pre_ped,
                                    "pre_aut"   : item.pre_aut,
                                    "itemdatum" : item.itemdatum,
                                    "imagen"   : body
                                                   
                                })
                                resolve(item.itemdata)
                            })   
                            })
                        }
                        console.log('promesas ' + promesas.length);
                        Promise.all(promesas)
                        .then(function(results) {
                            // console.log(results)
                            res.status(201).send(ped);
                           }).catch(function(error) {
                             console.log(error);
                             res.status(400).send(error)     
                           });;  
          // console.log('pedcab = '+ JSON.stringify(pedcab));
          // res.status(201).send(ped)
        })
        //.then(pedcab => )
        //.catch(error => res.status(400).send(error));
 

        // return db.pedcab.findOne(att)
        //.then(pedcab => res.status(201).send(pedcab))
        //.catch(error => res.status(400).send(error));
    }, 
    
    postOne(req,res){
        var ped={
//            id: 99988,
            nro: req.body.nro,
            fem: req.body.fem,
            ven: req.body.ven,
            conven:req.body.conven,
            est:0,
            cli: req.body.cli,
            clidir:req.body.clidir,
            precio: 1,
            articulo: 1,
            id_pack:  req.body.id_pack | 0,
            peditms:[]
         } 

        for (var i in req.body.peditms){
            item = req.body.peditms[i]
            ped.peditms.push({
                "itemdata" : item.itemdata,
                "can_ped"  : item.can_ped,
                "can_aut"  : item.can_aut,
                "id_remitm": 0,
                "pre_ped"  : item.pre_ped,
                "pre_aut"  : item.pre_aut,
                "est"      :0,
                "can_a_rem":0,
                "can_ent"  :0 
                                 
            })
        } 
        console.log((ped))
        return db.sequelize.transaction(transaction =>
            db.pedcab.create(ped,{
            include: [db.peditm],transaction
        }))
        .then(pedido => res.status(201).send(pedido))
        .catch(error => res.status(400).send(error));
/*        .then(function() {d
            console.log('success');
        })
        .catch(function(err) {
            console.log(err);
        })
*/        
    },
    
    putEstado(req,res){
        console.log('id: '+ req.params.id)
        return db.pedcab.findByPk(req.params.id).then (pedido => {
            // verificar derechos
            if (pedido.est==0) {newEst=2}
            if (pedido.est==2) {newEst=4}
            // Actualizar obsaut
            db.pedcab.update(
                {est: newEst},
                {returning: true,
                    where: {id: req.params.id}
                }
            )
            .then(pedido => res.status(201).send(pedido))
            .catch(error => res.status(400).send(error));
        })
    }, 
  
}
/*
        /*Object.assign(
            {},
            {
                
        //o=JSON.parse(req.body)
        //console.log('BODY:   ' + o.nro)
        //console.log('BODY: '+ JSON.stringify(req.body))
        console.log('nro: '+ req.body.nro)
        console.log('itemdata 0: '+ req.body.peditms[0].itemdata)

        const reqObj= req.body.peditems.map(item => {
                    return Object.assign({},
                    { itemdata: req.body.peditems.itemdata,
                      can_ped : req.body.peditems.can_ped,
                      can_aut : req.body.peditems.can_aut,
                      pre_ped : req.body.peditems.pre_ped,
                      pre_aut : req.body.peditems.pre_aut,
                    })         
                })

                console.log('reqObj: '+ JSON.stringify(reqObj))
/*
        return PedCab.create(req.body,{
            include: [PedItm]
         }) 
        .then(pedcab => res.status(201).send(pedcab))
        .catch(error => res.status(400).send(error));
*/
         
/*        
        att={};
        att['attributes']=['id', 'nro','fem'];
        if (req.params.id){
            att['include']=[
                {model:Clientes,attributes:['id','nom']},
                {model:Vend,attributes:['id','nom']},
                {model:CliDir, as:'address',
                  attributes:['id','dir','localidad','codpos','prov']},
                {model:PedItm, 
                  attributes:['itemdata','can_ped','can_aut','pre_ped','pre_aut'],
                  include:[{model:ItemData,attributes:['id','articulo','color'],
                  include:[{model:Articulos, as:'art1',attributes:['id','codfac','nom']},
                  {model:Variante,attributes:['id','codigo','nom']}],
                  }]
                }    
            ]
            att['where']={id:req.params.id}
        }

        console.log('att = '+ JSON.stringify(att));

        return PedCab.findAll(att)
        .then(pedcab => res.status(201).send(pedcab))
        .catch(error => res.status(400).send(error));
    }
*/
        /*        if (req.params.id){
//            delete att.attributes
            att['attributes']=['id', 'nom'];
            // ok att['include']=[{model:ItemData,include:[{model:Variante}]}]
            att['include']=[{model:ItemData,include:[{model:Variante}]}]
            //att['include']=[{model:ItemData},]
            //att['include']['include']=[{model:Color}]
            if (!att['where']){att['where']={}}  
            att['where']={id: req.params.id}
        }

        console.log('att = '+ JSON.stringify(att));

        return Articulos.findAll(att)
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
