/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lote', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obs: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cant: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facnro: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priserie: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'lote',
    timestamps: false
  });
};
