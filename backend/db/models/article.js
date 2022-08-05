'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Article.associate = function (models) {
    Article.belongsTo(models.User, { foreignKey: "user_id" })
    Article.hasMany(models.Image, { foreignKey: 'article_id', onDelete: 'CASCADE', hooks: true })
    Article.hasMany(models.Comment, { foreignKey: 'article_id', onDelete: 'CASCADE', hooks: true })
  };
  return Article;
};