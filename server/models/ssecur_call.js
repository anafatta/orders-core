/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_call', {
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    procno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    request: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fileno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    primarykey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accessdenied: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    requestcancelled: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_call'
  });
};
