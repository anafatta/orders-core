/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_procedure', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    progno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    generaldoorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    generaloverride: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insertdoorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insertoverride: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changedoorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changeoverride: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deletedoorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleteoverride: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewdoorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viewoverride: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_procedure'
  });
};
