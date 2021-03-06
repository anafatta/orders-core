/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'ssecur_doorgroup.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'ssecur_doorgroup.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./ssecur_doorgroup.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("sdoorDgrpdesckeys").onDelete = 'CASCADE'; 
util.getAttribute("nro").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.ssecurDoorgroup",
    options: {
        tableName: "ssecur_doorgroup",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "nro": {
            type: Seq.INTEGER,
            field: "nro",
            primaryKey: true,
            allowNull: false,
            unique: "sdgrp__nokey"
        },
        "name": {
            type: Seq.STRING(30),
            field: "name",
            unique: "doornamekey"
        },
        "freeze": {
            type: Seq.INTEGER,
            field: "Freeze"
        }
    },
    relations: [{
        type: "hasMany",
        model: "public.ssecurDoor",
        schema: "public",
        table: "ssecur_door",
        source: "generator",
        details: {
            as: "sdoorDgrpdesckeys",
            foreignKey: "dgrpno",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};