/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unitload', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(sequnitload::regclass)',
      primaryKey: true
    },
    unitloadtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storagelocation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'storagelocation',
        key: 'id'
      }
    }
  }, {
    tableName: 'unitload',
    timestamps: false
  });
};
