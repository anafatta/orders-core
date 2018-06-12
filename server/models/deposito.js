/* jshint indent: 2 */

module.exports =  (sequelize, DataTypes) => {
  const Deposito = sequelize.define('deposito', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
      tableName: 'deposito'
    });
  return (Deposito);
}
