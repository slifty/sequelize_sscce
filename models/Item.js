'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    test: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Category)
  };
  return Item;
};