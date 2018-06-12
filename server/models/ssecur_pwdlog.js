/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_pwdlog', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pwpassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pwdate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pwtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_pwdlog'
  });
};
