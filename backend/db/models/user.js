'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_pic: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article, { foreignKey: 'user_id' });
    User.hasMany(models.Comment, { foreignKey: 'user_id' });
    User.hasMany(models.Result, { foreignKey: 'user_id' });
  };

  User.prototype.toSafeObject = function() {
    const { id, username, email, profile_pic } = this;
    return { id, username, email, profile_pic }
  }

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  }

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  }

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      bio: "this user haven't write anything yet",
      profile_pic: 'https://i.pinimg.com/originals/9f/aa/a1/9faaa1fedc94c355a4256ba6207c7714.png'
    });
    return await User.scope('currentUser').findByPk(user.id)
  }

  return User;
};