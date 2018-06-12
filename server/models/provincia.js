/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'provincia'
  });
};
