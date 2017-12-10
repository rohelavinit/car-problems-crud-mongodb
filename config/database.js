const monk = require('monk')

const connection = monk('localhost:27017/cars_development')

module.exports = connection