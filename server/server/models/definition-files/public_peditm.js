/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'peditm.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'peditm.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./peditm.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("pedcab").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.peditm",
    options: {
        tableName: "peditm",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "id": {
            type: Seq.INTEGER,
            field: "id",
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: "peditm_pkey"
        },
        "pedcabId": {
            type: Seq.INTEGER,
            field: "pedcab_id",
            references: "public.pedcab",
            referencesKey: "pedcab_id"
        },
        "itemdata": {
            type: Seq.INTEGER,
            field: "itemdata"
        },
        "canPed": {
            type: Seq.DECIMAL(8, 3),
            field: "can_ped"
        },
        "canAut": {
            type: Seq.DECIMAL(8, 3),
            field: "can_aut"
        },
        "est": {
            type: Seq.INTEGER,
            field: "est"
        },
        "idRemitm": {
            type: Seq.INTEGER,
            field: "id_remitm"
        },
        "preAut": {
            type: Seq.DECIMAL(10, 2),
            field: "pre_aut"
        },
        "prePed": {
            type: Seq.DECIMAL(10, 2),
            field: "pre_ped"
        },
        "canARem": {
            type: Seq.DECIMAL(8, 3),
            field: "can_a_rem"
        },
        "canEnt": {
            type: Seq.DECIMAL(8, 3),
            field: "can_ent"
        },
        "pedTsId": {
            type: Seq.CHAR(18),
            field: "ped_ts_id"
        },
        "stk": {
            type: Seq.INTEGER,
            field: "stk"
        }
    },
    relations: [{
        type: "belongsTo",
        model: "public.pedcab",
        schema: "public",
        table: "pedcab",
        source: "generator",
        details: {
            as: "pedcab",
            foreignKey: "pedcab_id",
            onDelete: "CASCADE",
            onUpdate: "NO ACTION"
        }
    }]
};