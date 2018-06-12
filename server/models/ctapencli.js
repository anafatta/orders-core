/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctapencli', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(seqctacli::regclass)',
      primaryKey: true
    },
    cli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tiptxt: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    fem: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fve: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obs: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    itot: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ipen: {
      type: DataTypes.REAL,
      allowNull: true
    },
    est: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ctapencli'
  });
};
