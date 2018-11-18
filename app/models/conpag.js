module.exports = function(sequelize, DataTypes) {
    return sequelize.define('conpag', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nom: {
        type: DataTypes.CHAR,
        allowNull: false,
        //primaryKey: true
      },
      dias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //primaryKey: true
      },
      descuento:{
        type: DataTypes.DECIMAL(15,4),
        allowNull: true,
        defaultValue:0.00
      },  
      incremento:{
        type: DataTypes.DECIMAL(15,4),
        allowNull: true,
        defaultValue:0.00
      }  
    }, {
      tableName: 'conpag',
      timestamps: false
    });
  };
  