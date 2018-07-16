/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  peditm = sequelize.define('peditm', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval('seqpeditm'::regclass)",
      primaryKey: true
    },
    pedcab_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedcab',
        key: 'id'
      }
    },
    itemdata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    can_ped: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    can_aut: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    est: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_remitm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    pre_aut: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    pre_ped: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    can_a_rem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    can_ent: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ped_ts_id: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    stk: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'peditm'
  });
   peditm.associate = function(db){
     peditm.belongsTo(db.pedcab,{
    //    as:'items',
        foreignKey:'pedcab_id',
    })
     
    peditm.belongsTo(db.itemdata,{
        //as:'address',
        foreignKey:'itemdata',
    })     
  }
  return peditm;
};
