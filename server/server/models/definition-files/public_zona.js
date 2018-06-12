/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'zona.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'zona.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('server/models/index.js'),
    model   = require('./zona.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("fkStoragelocationZonas").onDelete = 'CASCADE'; 
util.getAttribute("id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.zona",
    options: {
        tableName: "zona",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "id": {
            type: Seq.INTEGER,
            field: "id",
            primaryKey: true,
            allowNull: false,
            unique: "zona_pkey"
        },
        "nom": {
            type: Seq.CHAR(50),
            field: "nom",
            allowNull: false
        }
    },
    relations: [{
        type: "hasMany",
        model: "public.storagelocation",
        schema: "public",
        table: "storagelocation",
        source: "generator",
        details: {
            as: "fkStoragelocationZonas",
            foreignKey: "zona",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "hasMany",
        model: "public.storagelocation",
        schema: "public",
        table: "storagelocation",
        source: "generator",
        details: {
            as: "storagelocationZonaFkeys",
            foreignKey: "zona",
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
            as: "relatedFkStoragelocationZonaAreas",
            foreignKey: "zona",
            otherKey: "area",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.deposito",
        schema: "public",
        table: "deposito",
        source: "generator",
        details: {
            as: "relatedFkStoragelocationZonaDepositos",
            foreignKey: "zona",
            otherKey: "deposito",
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
            as: "relatedFkStoragelocationZonaAreas",
            foreignKey: "zona",
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
            as: "relatedFkStoragelocationZonaCalles",
            foreignKey: "zona",
            otherKey: "calle",
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
            as: "relatedStoragelocationZonaFkeyAreas",
            foreignKey: "zona",
            otherKey: "area",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsToMany",
        model: "public.deposito",
        schema: "public",
        table: "deposito",
        source: "generator",
        details: {
            as: "relatedStoragelocationZonaFkeyDepositos",
            foreignKey: "zona",
            otherKey: "deposito",
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
            as: "relatedFkStoragelocationZonaZonas",
            foreignKey: "zona",
            otherKey: "zona",
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
            as: "relatedStoragelocationZonaFkeyZonas",
            foreignKey: "zona",
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
            as: "relatedStoragelocationZonaFkeyAreas",
            foreignKey: "zona",
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
            as: "relatedStoragelocationZonaFkeyCalles",
            foreignKey: "zona",
            otherKey: "calle",
            through: "storagelocation",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};