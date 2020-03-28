let express = require('express')
let bodyParser = require('body-parser')
let apiRoutes = require('./routes/api.js')
let path = require('path')

let app = express()

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'student-sign-in-client', 'dist')))

app.use('/api', apiRoutes)

app.get('/', function (req, res, next) {
  res.send({'hello': 'there'})
})

app.use(function(req, res, next) {
  res.status(404).send('Not Found')
})

app.use(function(err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Server Error')
})

let server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${server.address().port}`)
})