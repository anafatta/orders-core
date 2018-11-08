/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Variante', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,       
      autoIncrement: true,
       //          (seqcolor::regclass)',
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
    tableName: 'color',
    timestamps: false
  });
};
