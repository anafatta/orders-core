/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedest', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    abr: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    rem: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pedest',
    timestamps: false
  });
};
