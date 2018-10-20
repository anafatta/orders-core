/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'deposito.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'deposito.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./deposito.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("fkStoragelocationDepositos").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.deposito",
    options: {
        tableName: "deposito",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "id": {
            type: Seq.INTEGER,
            field: "id",
            primaryKey: true,
            allowNull: false,
            unique: "deposito_pkey"
        },
        "nom": {
            type: Seq.CHAR(30),
            field: "nom"
        },
        "tipo": {
            type: Seq.INTEGER,
            field: "tipo"
        },
        "createdAt": {
            type: Seq.DATE,
            field: "createdAt"
        },
        "updatedAt": {
            type: Seq.DATE,
            field: "updatedAt"
        }
    },
    relations: [{
        type: "hasMany",
        model: "public.storagelocation",
        schema: "public",
        table: "storagelocation",
        source: "generator",
        details: {
            as: "fkStoragelocationDepositos",
            foreignKey: "deposito",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.area",
        schema: "public",
        table: "area",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationDepositoAreas",
            foreignKey: "deposito",
            otherKey: "area",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.zona",
        schema: "public",
        table: "zona",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationDepositoZonas",
            foreignKey: "deposito",
            otherKey: "zona",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.area",
        schema: "public",
        table: "area",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationDepositoAreas",
            foreignKey: "deposito",
            otherKey: "area",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.calle",
        schema: "public",
        table: "calle",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationDepositoCalles",
            foreignKey: "deposito",
            otherKey: "calle",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.zona",
        schema: "public",
        table: "zona",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationDepositoZonas",
            foreignKey: "deposito",
            otherKey: "zona",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};