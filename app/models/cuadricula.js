/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuadricula', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,       
      autoIncrement: true,
       //      defaultValue: 'nextval(seqcuadricula::regclass)',
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'cuadricula',
    timestamps: false
  });
};
