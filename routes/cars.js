const express = require('express')
const router = express.Router()
const CarCollection = require('../models/car_collection')

router.get('/new', (req, res) => {
  res.render('cars/new')
})

// Controller
router.get('/', (req, res) => {
  // Model
  CarCollection.findAll((err, cars) => {
    // View
    res.render("cars/index", {cars: cars})
  })
})

// Controller
router.post('/', (req, res) => {
  // Model
  CarCollection.create(req.body, (err, car) => {
    // View
    res.redirect('/cars')
  })
})

router.get('/:id', (req, res) => {
  CarCollection.findById(req.params.id, (err, car) => {
    res.render('cars/show', {car: car})
  })
})

router.get('/:id/edit', (req, res) => {
  CarCollection.findById(req.params.id, (err, car) => {
    res.render('cars/edit', {car: car})
  })
})

router.patch('/:id', (req, res) => {
  CarCollection.update(req.params.id, req.body, (err, car) => {
    res.redirect('/cars')
  })
})

router.delete('/:id', (req, res) => {
  CarCollection.delete(req.params.id, (err, responseCode) => {
    res.redirect('/cars')
  })
})

module.exports = router