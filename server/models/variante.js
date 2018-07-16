/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  variante = sequelize.define('variante', {
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
  variante.associate = function(db){
    variante.hasMany(db.itemdata,{
      //    as:'col',
          foreignKey:'color',
      })
  }
  return variante;
};
