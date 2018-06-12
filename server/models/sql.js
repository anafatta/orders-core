/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sql', {
    s1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s6: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s7: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s8: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s9: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s10: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s11: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    s12: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    tableName: 'sql'
  });
};
