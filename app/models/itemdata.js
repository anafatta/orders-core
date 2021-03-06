/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  itemdata = sequelize.define('itemdata', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    articulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'articulo',
        key: 'id'
      },
      unique: true
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'color',
        key: 'id'
      }
    },
    stkseg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    est: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecinv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'itemdata',
    timestamps: false
  });
  itemdata.associate = function(db){
 
    itemdata.belongsTo(db.articulo,{
      as:'art',
      foreignKey:'articulo',
    })
  
    itemdata.belongsTo(db.variante,{
      //    as:'col',
      foreignKey:'color',
    })

    itemdata.hasMany(db.peditm,{
      foreignKey:'itemdata',
  })
  
  }
  return itemdata;
};
