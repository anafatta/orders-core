/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('heroes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'heroes'
  });
};
