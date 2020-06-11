const path = require('path')
const Sequelize = require('sequelize')
const sequelizeConfig = require('../config/sequelize-config')
const sequelize = new Sequelize(
  sequelizeConfig['development'].url,
  Object.assign(
    sequelizeConfig['development'],
  ),
)

module.exports = {
  Category: sequelize.import(path.join(__dirname, 'Category')),
  Item: sequelize.import(path.join(__dirname, 'Item'))
}
