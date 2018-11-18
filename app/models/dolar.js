module.exports = function(sequelize, DataTypes) {
    return sequelize.define('dolar', {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true
      },
      usd:{
        type: DataTypes.DECIMAL(16,4),
        allowNull: true,
        defaultValue:1.00
      },  
      eur:{
        type: DataTypes.DECIMAL(16,4),
        allowNull: true,
        defaultValue:1.00
      }  
    }, {
      tableName: 'dolar',
      timestamps: false
    });
  };
  