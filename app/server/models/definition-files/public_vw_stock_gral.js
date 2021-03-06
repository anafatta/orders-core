/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'vw_stock_gral.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'vw_stock_gral.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./vw_stock_gral.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:

util.getAttribute("deposito").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.vwStockGral",
    options: {
        tableName: "vw_stock_gral",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "deposito": {
            type: Seq.INTEGER,
            field: "deposito"
        },
        "artCod": {
            type: Seq.CHAR(16),
            field: "art_cod"
        },
        "artNom": {
            type: Seq.CHAR(50),
            field: "art_nom"
        },
        "colCod": {
            type: Seq.CHAR(16),
            field: "col_cod"
        },
        "colNom": {
            type: Seq.CHAR(50),
            field: "col_nom"
        },
        "lot": {
            type: Seq.CHAR(3),
            field: "lot"
        },
        "estado": {
            type: Seq.INTEGER,
            field: "estado"
        },
        "itemdata": {
            type: Seq.INTEGER,
            field: "itemdata"
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
        },
        "fecinv": {
            type: Seq.DATEONLY,
            field: "fecinv"
        },
        "cat": {
            type: Seq.CHAR(3),
            field: "cat"
        }
    },
    relations: []
};