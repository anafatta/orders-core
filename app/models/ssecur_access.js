/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_access', {
    userno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doorno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    denyflag: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_access',
    timestamps: false
  });
};
