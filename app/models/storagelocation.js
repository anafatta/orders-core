/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storagelocation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqstoragelocation::regclass)',
      primaryKey: true
    },
    checkcapacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reservedcapacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storagelocationstrategy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'id'
      }
    },
    zona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'zona',
        key: 'id'
      }
    },
    deposito: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'deposito',
        key: 'id'
      }
    },
    calle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'calle',
        key: 'id'
      },
      unique: true
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    piso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'storagelocation',
    timestamps: false
  });
};
