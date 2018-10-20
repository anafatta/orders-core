/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  articulo = sequelize.define('articulo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqart::regclass)',
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
    },
    uni: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    codfac: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nom2: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    categ: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    canprom: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'articulo',
  });
  
  articulo.associate = function(db) {
    articulo.hasMany(db.itemdata,{
      foreignKey:'articulo',
    })
  }
  return articulo;
};
