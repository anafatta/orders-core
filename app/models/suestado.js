/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suestado', {
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
    tableName: 'suestado',
    timestamps: false
  });
};
