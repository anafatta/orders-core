/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remitm', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqremitm::regclass)',
      primaryKey: true
    },
    idremcab: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idstockunit: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'remitm',
    timestamps: false
  });
};
