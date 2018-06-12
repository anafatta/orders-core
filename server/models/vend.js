/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vend', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    usr: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'vend'
  });
};
