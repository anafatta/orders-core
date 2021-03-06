/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'clidir.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'clidir.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./clidir.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("relatedCuadricula").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.clidir",
    options: {
        tableName: "clidir",
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
            unique: "clidir_pkey"
        },
        "idcli": {
            type: Seq.INTEGER,
            field: "idcli",
            references: "public.clientes",
            referencesKey: "idcli"
        },
        "dir": {
            type: Seq.CHAR(50),
            field: "dir",
            allowNull: false
        },
        "localidad": {
            type: Seq.CHAR(30),
            field: "localidad",
            allowNull: false
        },
        "codpos": {
            type: Seq.CHAR(8),
            field: "codpos"
        },
        "prov": {
            type: Seq.INTEGER,
            field: "prov",
            references: "public.provincia",
            referencesKey: "prov"
        },
        "tel": {
            type: Seq.CHAR(20),
            field: "tel"
        },
        "cuadricula": {
            type: Seq.INTEGER,
            field: "cuadricula",
            references: "public.cuadricula",
            referencesKey: "cuadricula"
        },
        "horario": {
            type: Seq.CHAR(50),
            field: "horario"
        },
        "expreso": {
            type: Seq.INTEGER,
            field: "expreso",
            references: "public.expresos",
            referencesKey: "expreso"
        }
    },
    relations: [{
        type: "belongsTo",
        model: "public.cuadricula",
        schema: "public",
        table: "cuadricula",
        source: "generator",
        details: {
            as: "relatedCuadricula",
            foreignKey: "cuadricula",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsTo",
        model: "public.expresos",
        schema: "public",
        table: "expresos",
        source: "generator",
        details: {
            as: "relatedExpreso",
            foreignKey: "expreso",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsTo",
        model: "public.clientes",
        schema: "public",
        table: "clientes",
        source: "generator",
        details: {
            as: "relatedIdcli",
            foreignKey: "idcli",
            onDelete: "CASCADE",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsTo",
        model: "public.provincia",
        schema: "public",
        table: "provincia",
        source: "generator",
        details: {
            as: "relatedProv",
            foreignKey: "prov",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};