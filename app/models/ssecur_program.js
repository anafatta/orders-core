/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_program', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    tableName: 'ssecur_program'
  });
};
