/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packcab', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
       //            allowNull: true,       autoIncrement: true, //          (seqpackcab::regclass)',
      primaryKey: true
    },
    obs: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    idart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articulo',
        key: 'id'
      }
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    fem: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    festimada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    dep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    rem_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'packcab',
    timestamps: false
  });
};
