/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stksaldo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqstksaldos::regclass)',
      primaryKey: true
    },
    deposito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdata',
        key: 'id'
      }
    },
    cantpza: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rcanpza: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ramount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'stksaldo'
  });
};
