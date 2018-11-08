/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  clidir = sequelize.define('clidir', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
//    defaultValue: "nextval('seqclidir'::regclass)",
      primaryKey: true
    },
    idcli: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    dir: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    localidad: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    codpos: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    prov: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'provincia',
        key: 'id'
      }
    },
    tel: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    cuadricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cuadricula',
        key: 'id'
      }
    },
    horario: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    expreso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'expresos',
        key: 'id'
      }
    }
  }, {
    tableName: 'clidir',
    timestamps: false
  });
  clidir.associate = function (db) {

    clidir.belongsTo(db.clientes,{
      foreignKey:'idcli',
    })

    clidir.hasMany(db.pedcab,{
      foreignKey:'clidir',
    })

    clidir.belongsTo(db.expresos,{
      foreignKey:'expreso',
      as:'flete'
    })
  
  }  
  return clidir;
};
