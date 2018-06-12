/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqcli::regclass)',
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    dir: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    loc: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    codpos: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    prov: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    vend: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codfac: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    razonsoc: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    blk: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'clientes'
  });
};
