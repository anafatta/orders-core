/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disponible_web', {
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_art: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nom_art: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    cod_col: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nom_col: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    ahora: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'disponible_web'
  });
};
