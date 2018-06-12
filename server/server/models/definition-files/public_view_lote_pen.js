/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'view_lote_pen.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'view_lote_pen.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./view_lote_pen.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:

util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.viewLotePen",
    options: {
        tableName: "view_lote_pen",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "id": {
            type: Seq.INTEGER,
            field: "id"
        },
        "nro": {
            type: Seq.INTEGER,
            field: "nro"
        },
        "itemdata": {
            type: Seq.INTEGER,
            field: "itemdata"
        },
        "codart": {
            type: Seq.CHAR(16),
            field: "codart"
        },
        "nomart": {
            type: Seq.CHAR(50),
            field: "nomart"
        },
        "codcol": {
            type: Seq.CHAR(16),
            field: "codcol"
        },
        "nomcol": {
            type: Seq.CHAR(50),
            field: "nomcol"
        },
        "uniart": {
            type: Seq.CHAR(3),
            field: "uniart"
        },
        "obs": {
            type: Seq.CHAR(16),
            field: "obs"
        }
    },
    relations: []
};