/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  pedcab = sequelize.define('pedcab', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      //defaultValue:"DEFAULT", //"nextval('seqpedcab'::regclass)",
      primaryKey: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fem: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '(today'
    },
    ven: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vend',
        key: 'id'
      }
    },
    cli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obsaut: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obsdep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    est: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    articulo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantot: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    cuadricula: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecent: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    clidir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conven: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    endoso_nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endosado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    id_pack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ts_id: {
      type: DataTypes.CHAR,
      allowNull: true,
      unique: true
    },
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    hora: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('now')
    },
    urgencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '4'
    }
  }, {
    tableName: 'pedcab',
    timestamps: false
  });
  pedcab.associate = function(db){

    pedcab.belongsTo(db.clientes,{
      foreignKey:'cli',
    })
    
    pedcab.belongsTo(db.vend,{
      foreignKey:'ven',
    })
  
    pedcab.belongsTo(db.clidir,{
      as:'address',
      foreignKey:'clidir',
    })
  
    pedcab.hasMany(db.peditm,{
      foreignKey:'pedcab_id',
    })
  
  }
  return pedcab;
};
