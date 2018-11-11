const db = require('../models');
const Request = require("request");
/*const Articulos = require('../models').articulo;
const ItemData = require('../models').itemdata;
const Variante = require('../models').variante;
*/
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var   kk = new Array();


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
    async loadUrls(req,res){
        await Request.get("https://simsiroglu.com.ar/sim/wp-content/themes/shk/productgallery.php?action=getimg", (error, response, body) => {
           console.log("Adentro de loadUrls")    
           //console.log(JSON.stringify(body))
           
           kk=JSON.parse(body) ;
           for (var i = 0; i < kk.length ; i+=1) {
           //console.log(i+' '+kk[i].codigo+' '+kk[i].color) 
        }
            
        });  
        return(kk)
    },     
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
            //att['include']=[{model:db.itemdata,include:[{model:db.variante}]}]
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
            
            var xitemdata=[]
            
            // var promesas= []
            qq="select * from fndisp("+ articulo.id +")"
            db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
            .then(data => {
                xitemdata=data;
                for (var i in xitemdata) {
                    // console.log(xitemdata[i].id+' '+xitemdata[i].codigo+' '+xitemdata[i].nom  +' '+ xitemdata[i].pza)
                    // promesas[i] = new Promise(function(resolve, reject) {
                    //    let n=i; // for remain the value after promise
                    //    Request.get(this.ROOT_URL + '&codigo=' + product.codfac + '&color=' + xitemdata[i].codigo, (error, response, body) => {
                    //        if(error) {
                    //           reject(error)
                    //         } 
                    // console.log("articulo.codfac = " + articulo.codfac)
                    img=kk.find(element =>{
                        //console.log('element = ' + JSON.stringify(element))
                        return (element.codigo == articulo.codfac) && ((element.color).trim() == (xitemdata[i].codigo).trim())
                    })
                    if (!img) {image_url=''}else{image_url=img.image_url}

                    product.variantes.push({
                        itemdata_id : xitemdata[i].id,
                        codigo      : xitemdata[i].codigo,
                        nom         : xitemdata[i].nom,
                        pza         : xitemdata[i].pza,
                        imagen      : image_url
                    })
                }
            })
            .then(function(results) {
                // console.log(JSON.stringify(product))
                res.status(201).send(product)
            })
    
        })

        .catch(function(error) {
            console.log(error);
            res.status(400).send(error);     
        })  
                //Promise.all(promesas)
    }

      
};    


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
