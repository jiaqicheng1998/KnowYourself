'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    img_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};