/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_file', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_file',
    timestamps: false
  });
};
