const carsCollection = require('../config/database').get('cars')

class CarCollection {
  static findAll (cb) {
    carsCollection.find({}, cb)
  }

  static create (data, cb) {
    carsCollection.insert(data, cb)
  }

  static findById (id, cb) {
    carsCollection.findOne({_id: id}, cb)
  }

//   static update (id, update, cb) {
//     carsCollection.findAndModify({
//       query : { _id: id},
//       update : { '$set': update }
//     }, cb)
//   }

static update (id, update, cb) {
    carsCollection.update({ _id: id},{ '$set': update }, cb)
  }

  static delete (id, cb) {
    carsCollection.remove({_id: id}, cb)
  }
}

module.exports = CarCollection