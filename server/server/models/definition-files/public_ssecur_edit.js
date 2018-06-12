/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'ssecur_edit.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'ssecur_edit.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./ssecur_edit.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:

util.getAttribute("nro").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.ssecurEdit",
    options: {
        tableName: "ssecur_edit",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "nro": {
            type: Seq.INTEGER,
            field: "nro",
            primaryKey: true,
            allowNull: false,
            unique: "sedit__nokey"
        },
        "callno": {
            type: Seq.INTEGER,
            field: "callno"
        },
        "fieldno": {
            type: Seq.INTEGER,
            field: "fieldno"
        },
        "oldvalue": {
            type: Seq.STRING(30),
            field: "oldvalue"
        },
        "newvalue": {
            type: Seq.STRING(30),
            field: "newvalue"
        }
    },
    relations: []
};