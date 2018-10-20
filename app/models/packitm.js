/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packitm', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqpackitm::regclass)',
      primaryKey: true
    },
    packcab_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'packcab',
        key: 'id'
      }
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'itemdata',
        key: 'id'
      }
    },
    canped: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    cancom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    caning: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'packitm'
  });
};
