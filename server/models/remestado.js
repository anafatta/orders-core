/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remestado', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'remestado'
  });
};
