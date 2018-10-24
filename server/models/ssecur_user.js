/* jshint indent: 2 */
var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssecur_user', {
    nro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    groupflag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passwordsize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwordmaxage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passworddate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwordtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logondate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logontime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    failures: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slocked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  },
  {
    classMethods: {
      validatePassword: function(password, storedPwd, done , user) {
        bcrypt.compare(password, storedPwd, function(err, isMatch){
          if(err) console.log(err)
          if(isMatch) {
            return done(null, user)
          } else {
            return done(null, false)
          }
          });
      }
    }
  }, 
  {
    tableName: 'ssecur_user'
  }
  );


ssecur_user.hook('beforeCreate', function(user, fn) {
var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  return salt;
});
bcrypt.hash(user.password, salt, null, function(err, hash) {
if(err) return next(err);
user.password = hash;
return fn(null, user)
});
})
};