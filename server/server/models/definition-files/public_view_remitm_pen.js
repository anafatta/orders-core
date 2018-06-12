/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'view_remitm_pen.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'view_remitm_pen.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./view_remitm_pen.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:

util.getAttribute("idcab").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.viewRemitmPen",
    options: {
        tableName: "view_remitm_pen",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "idcab": {
            type: Seq.INTEGER,
            field: "idcab"
        },
        "idsu": {
            type: Seq.INTEGER,
            field: "idsu"
        },
        "serie": {
            type: Seq.CHAR(24),
            field: "serie"
        },
        "codArt": {
            type: Seq.CHAR(16),
            field: "cod_art"
        },
        "codCol": {
            type: Seq.CHAR(16),
            field: "cod_col"
        },
        "amount": {
            type: Seq.DECIMAL(8, 3),
            field: "amount"
        },
        "suestado": {
            type: Seq.INTEGER,
            field: "suestado"
        }
    },
    relations: []
};