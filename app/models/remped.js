/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remped', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqremped::regclass)',
      primaryKey: true
    },
    remcab_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pza_ped: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'remped'
  });
};
