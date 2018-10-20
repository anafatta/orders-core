/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packpza', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqpackpza::regclass)',
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
    rollno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    serie: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    lot: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'packpza'
  });
};
