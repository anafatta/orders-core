/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'packpza.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'packpza.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./packpza.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("packcab").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.packpza",
    options: {
        tableName: "packpza",
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
            unique: "packpza_pkey"
        },
        "packcabId": {
            type: Seq.INTEGER,
            field: "packcab_id",
            allowNull: false,
            unique: "packori",
            references: "public.packcab",
            referencesKey: "packcab_id"
        },
        "itemdata": {
            type: Seq.INTEGER,
            field: "itemdata",
            allowNull: false,
            unique: "packori",
            references: "public.itemdata",
            referencesKey: "itemdata"
        },
        "rollno": {
            type: Seq.INTEGER,
            field: "rollno",
            allowNull: false,
            unique: "packori"
        },
        "amount": {
            type: Seq.DECIMAL(8, 3),
            field: "amount"
        },
        "serie": {
            type: Seq.CHAR(24),
            field: "serie"
        },
        "lot": {
            type: Seq.CHAR(3),
            field: "lot"
        },
        "estado": {
            type: Seq.INTEGER,
            field: "estado",
            allowNull: false
        }
    },
    relations: [{
        type: "belongsTo",
        model: "public.packcab",
        schema: "public",
        table: "packcab",
        source: "generator",
        details: {
            as: "packcab",
            foreignKey: "packcab_id",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsTo",
        model: "public.itemdata",
        schema: "public",
        table: "itemdata",
        source: "generator",
        details: {
            as: "relatedItemdatum",
            foreignKey: "itemdata",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};