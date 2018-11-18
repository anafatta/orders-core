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
    async findOne(req,res){
        //console.log('ID de conpag: '+ req.params.id)
        
        dolar = await db.dolar.findOne({ order:[['fecha','DESC']]})
        // console.log('dolar = ' + JSON.stringify(dolar))

        att={};
        if (req.params.id_articulo){
            att['attributes']=['id', 'codfac'];
            att['where']={id: req.params.id_articulo}
        }
        await db.articulo.findOne(att).then(async articulo => { 
            console.log('articulo = '+ JSON.stringify(articulo))
            att={};
            if (articulo.codfac){
                att['attributes']=['codfac', 'precio'];
                att['where']={codfac: articulo.codfac}
            }
            precios = await db.precios.findOne(att)
            console.log('precios = '+ JSON.stringify(precios))
                       
        })

        
         
        att={};
        att['attributes']=['id', 'descuento', 'incremento'];
        if (req.params.id_conpag){
            att['where']={id: req.params.id_conpag}
        }else{    
            att['where']={id: 1}
        }
        conpag = await db.conpag.findOne(att)

        .then(async conpag =>{ 
            console.log('=== ANTES DE LA CUENTA === ')
            console.log('dolar     II = ' + dolar.usd) //JSON.stringify(dolar))
            console.log('conpag    II= ' + conpag.descuento) //JSON.stringify(conpag))
            console.log('precios   II = '+ precios.precio )  // JSON.stringify(precios))
            //console.log('descuento II = ' + cliente.descuento) //JSON.stringify(dolar))

            precio_base    = (precios.precio * dolar.usd) 
            console.log('precio_base = '+precio_base)
            precio_conpag  = precio_base / conpag.descuento * conpag.incremento
            console.log('precio_conpag = ' + precio_conpag)  

            
            if (req.params.id_cliente){
                att={};
                att['attributes']=['id', 'descuento'];
                att['where']={id: req.params.id_cliente}
                cliente = await db.clientes.findOne(att)
                precio_final = (precio_conpag / (1 + (cliente.descuento/100))).toFixed(2)
                console.log('descuento II = ' + cliente.descuento) //JSON.stringify(dolar))

            }else{    
                precio_final = precio_conpag.toFixed(2)
            }
            console.log('precio_final = ' + precio_final)  
       
            res.status(201).send({precio:precio_final})
        })
        .catch(error => res.status(400).send(error));
    }
};
