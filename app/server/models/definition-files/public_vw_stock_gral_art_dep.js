/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'vw_stock_gral_art_dep.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'vw_stock_gral_art_dep.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./vw_stock_gral_art_dep.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:

util.getAttribute("cat").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.vwStockGralArtDep",
    options: {
        tableName: "vw_stock_gral_art_dep",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "cat": {
            type: Seq.CHAR(3),
            field: "cat"
        },
        "catnom": {
            type: Seq.CHAR(30),
            field: "catnom"
        },
        "artCod": {
            type: Seq.DECIMAL,
            field: "art_cod"
        },
        "artNom": {
            type: Seq.CHAR(50),
            field: "art_nom"
        },
        "deposito": {
            type: Seq.INTEGER,
            field: "deposito"
        },
        "unidades": {
            type: Seq.BIGINT,
            field: "unidades"
        },
        "cantidad": {
            type: Seq.DECIMAL,
            field: "cantidad"
        },
        "uni": {
            type: Seq.CHAR(3),
            field: "uni"
        }
    },
    relations: []
};