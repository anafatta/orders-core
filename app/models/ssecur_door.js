/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_door', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dgrpno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ssecur_doorgroup',
        key: 'nro'
      }
    },
    equate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Freeze: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ssecur_door',
    timestamps: false
  });
};
