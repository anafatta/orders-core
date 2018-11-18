module.exports = function(sequelize, DataTypes) {
    return sequelize.define('precios', {
      codfac: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ancho: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //primaryKey: true
      },
      mts: {
        type: DataTypes.CHAR,
        allowNull: false,
        //primaryKey: true
      },
      precio:{
        type: DataTypes.DECIMAL(16,4),
        allowNull: true,
        defaultValue:0.00
      }  
    }, {
      tableName: 'precios',
      timestamps: false
    });
  };
  