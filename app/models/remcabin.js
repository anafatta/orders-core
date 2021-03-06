/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remcabin', {
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
      allowNull: true,
      references: {
        model: 'remestado',
        key: 'id'
      }
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
    chofer: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    matricula: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'remcabin',
    timestamps: false
  });
};
