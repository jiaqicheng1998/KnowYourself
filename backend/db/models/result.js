'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Result.associate = function(models) {
    // associations can be defined here
    Result.belongsTo(models.User, { foreignKey: "user_id" })
  };
  return Result;
};