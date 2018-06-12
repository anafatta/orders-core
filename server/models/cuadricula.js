/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuadricula', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqcuadricula::regclass)',
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'cuadricula'
  });
};
