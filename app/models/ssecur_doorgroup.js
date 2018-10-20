/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_doorgroup', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Freeze: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_doorgroup'
  });
};
