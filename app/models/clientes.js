/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  
  clientes = sequelize.define('clientes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
//      defaultValue: "nextval('seqcli'::regclass)",
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    dir: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    loc: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    codpos: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    prov: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    vend: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codfac: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    razonsoc: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    blk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

  }, {
    tableName: 'clientes',
    timestamps: false
  });

  clientes.associate=function (db) {
  
    clientes.hasMany(db.clidir,{
      as:'address',
      foreignKey:'idcli',
    })
  
    clientes.hasMany(db.pedcab,{
      foreignKey:'cli',
    })
  
    clientes.belongsTo(db.vend,{
      as:'salesman',
      foreignKey:'vend',
    })
  }  
  return clientes;
};

