/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_useringroup', {
    userno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ugrpno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'ssecur_useringroup',
    timestamps: false
  });
};
