/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zona', {
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
    tableName: 'zona'
  });
};
