/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_edit', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    callno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fieldno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oldvalue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    newvalue: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_edit'
  });
};
