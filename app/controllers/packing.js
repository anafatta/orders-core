const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports={
    getPackingxArt(req,res){
        qq= "SELECT packcab.id, packcab.festimada, packcab.obs" +
            " FROM public.packcab, public.articulo" +
            " WHERE articulo.id = packcab.idart AND packcab.estado = 0 and articulo.id=" + req.params.id_art
            " ORDER BY packcab.festimada ASC;"
        return db.sequelize.query (qq,{ type : db.sequelize.QueryTypes.SELECT})
        .then(packings => {
            res.status(201).send(packings)
        })
        .catch(function(error) {
            console.log(error);
            res.status(400).send(error);     
        })
    }
}
