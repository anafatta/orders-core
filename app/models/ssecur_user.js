/* jshint indent: 2 */
var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ssecur_user', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    groupflag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passwordsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwordmaxage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passworddate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwordtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logondate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logontime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    failures: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slocked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    pwdhash: {
      type: DataTypes.BLOB,
      allowNull: true
    }  
  }, {
    tableName: 'ssecur_user',
    timestamps: false
  });
};
