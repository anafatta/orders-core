/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calle', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqcalle::regclass)',
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    nave: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deposito: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '2'
    }
  }, {
    tableName: 'calle'
  });
};
