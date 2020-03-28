let Sequelize = require('sequelize')

// get running environment
let env = process.env.NODE_ENV || 'development'
// import config and get env object
let config = require(__dirname + '/../../config.json')[env]
let db = {}
let sequelize

// if we are using an env variable then set databse to the env variable value
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config)
}
// import student model into sequelize cache
let model = sequelize['import']('./students.js')

// set db in name and sequelize variables
db[model.name] = model
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db