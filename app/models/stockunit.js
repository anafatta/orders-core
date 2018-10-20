/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stockunit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqstockunit::regclass)',
      primaryKey: true
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'itemdata',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reservedamount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    unitload: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unitload',
        key: 'id'
      }
    },
    lote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    suorigen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    serie: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    fplanilla: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(now'
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    deposito: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    pack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    lot: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'stockunit'
  });
};
