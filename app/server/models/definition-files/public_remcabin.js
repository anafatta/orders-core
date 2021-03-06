/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'remcabin.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'remcabin.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./remcabin.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("relatedEst").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.remcabin",
    options: {
        tableName: "remcabin",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "id": {
            type: Seq.INTEGER,
            field: "id",
            primaryKey: true,
            allowNull: false,
            unique: "remcabin_pkey"
        },
        "fem": {
            type: Seq.DATEONLY,
            field: "fem"
        },
        "empresa": {
            type: Seq.INTEGER,
            field: "empresa"
        },
        "tipo": {
            type: Seq.INTEGER,
            field: "tipo"
        },
        "nro": {
            type: Seq.INTEGER,
            field: "nro"
        },
        "ori": {
            type: Seq.INTEGER,
            field: "ori"
        },
        "des": {
            type: Seq.INTEGER,
            field: "des"
        },
        "usr": {
            type: Seq.INTEGER,
            field: "usr"
        },
        "unitload": {
            type: Seq.INTEGER,
            field: "unitload"
        },
        "est": {
            type: Seq.INTEGER,
            field: "est",
            comment: "10 - cargando\n20 - cerrado\n30 - viajando\n40 - descargando\n50 - recibido  ok\n\n",
            references: "public.remestado",
            referencesKey: "est"
        },
        "storagelocation": {
            type: Seq.INTEGER,
            field: "storagelocation"
        },
        "cli": {
            type: Seq.INTEGER,
            field: "cli"
        },
        "lugar": {
            type: Seq.INTEGER,
            field: "lugar",
            allowNull: false
        },
        "chofer": {
            type: Seq.CHAR(50),
            field: "chofer"
        },
        "matricula": {
            type: Seq.CHAR(10),
            field: "matricula"
        }
    },
    relations: [{
        type: "belongsTo",
        model: "public.remestado",
        schema: "public",
        table: "remestado",
        source: "generator",
        details: {
            as: "relatedEst",
            foreignKey: "est",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};