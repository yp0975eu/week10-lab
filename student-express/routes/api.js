let express = require('express')
let db = require('../models')
let Sequelize = require('sequelize')

let Student = db.Student // get model from db
let router = express.Router() 

/**
 * On get request call to api/students get db model 
 * and queury for all entries, sort by starId
 */
router.get('/students', function(req, res, next){
  Student.findAll({ order:['starId'] }).then(students => {
    return res.json(students)
  }).catch(err => next(err))
})

/**
 * on post request to api/students create a new entry
 * sending response value 201 - created
 * when there is an error check if it is a 
 * Sequelize error type and get the messages from db
 * to send with error code. If it is not a Sequelize
 * error then send to next error middleware
 */
router.post('/students', function(req, res, next){
  Student.create(req.body).then(data => {
    return res.status(201).send('ok')
  }).catch(err => {
    if (err instanceof Sequelize.ValidationError){
      let messages = err.errors.map(e => e.message)
      return res.status(400).json(messages)
    }
    return next(err)
  })
})

/**
 * on patch ruquest to route api/students/id
 * ge the id and make an update. Check for updated
 * row count, if there are no update rows send 404
 * not found error. When there is a db error check for 
 * Sequelize error type and get the messages from db
 * to send with error code. If it is not a Sequelize
 * error then send to next error middleware
 */
router.patch('/students/:id', function(req, res, next){
  Student.update(req.body, {where: { id: req.params.id }})
    .then(rowsModified => {
      if (!rowsModified[0]) {
        return res.status(404).send("Not found")
      }
      return res.send('ok')
  }).catch(err => {
    if (err instanceof Sequelize.ValidationError){
      let messages = err.errors.map(e => e.message)
      return res.status(400).json(messages)
    }
    return next(err)
  })
})

/**
 * When delete request to route api/students/id
 * get he id and delete it. Send errors to error
 * middleware
 */
router.delete('/students/:id', function(req, res, next){
  Student.destroy({where: { id: req.params.id }})
    .then(rowsModified => {
      return res.send('ok')
  }).catch(err => next(err))
})


module.exports = router