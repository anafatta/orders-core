/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  variante = sequelize.define('variante', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,       
      autoIncrement: true, 
      //      defaultValue: 'nextval(seqcolor::regclass)',
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
  variante.associate = function(db){
    variante.hasMany(db.itemdata,{
      //    as:'col',
          foreignKey:'color',
      })
  }
  return variante;
};
