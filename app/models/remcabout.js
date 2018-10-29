/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remcabout', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fem: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    des: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unitload: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    est: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storagelocation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cli: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    lugar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    nombre: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    direccion: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    id_ped: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fec_cierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fec_factura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fec_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'remcabout',
    timestamps: false
  });
};
