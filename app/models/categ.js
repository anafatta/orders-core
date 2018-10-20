/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categ', {
    id: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'categ'
  });
};
