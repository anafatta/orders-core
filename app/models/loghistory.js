/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loghistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    suid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uldes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ulori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'loghistory',
    timestamps: false
  });
};
