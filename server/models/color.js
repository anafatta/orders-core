/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('color', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqcolor::regclass)',
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: 'NULL'
    },
    codigo: {
      type: DataTypes.CHAR,
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'color'
  });
};
