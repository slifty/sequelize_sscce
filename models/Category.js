'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    test: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Item)
  };
  return Category;
};