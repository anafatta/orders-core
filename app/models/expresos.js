/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expresos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    dir: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR,
      allowNull: true
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
    cuit: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    horario: {
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
    }
  }, {
    tableName: 'expresos',
    timestamps: false
  });
  expresos.associate = function(db) {
    expresos.hasMany(db.clidir,{
      foreignKey:'expreso',
      as:'flete'
    })
  }
  return expresos;

};
