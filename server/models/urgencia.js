/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('urgencia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'urgencia'
  });
};
