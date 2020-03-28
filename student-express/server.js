let express = require('express')
let bodyParser = require('body-parser')
let apiRoutes = require('./routes/api.js')
let path = require('path')

let app = express()

// set body parser middleware to parse request bodies before
// being handled by other handlers
app.use(bodyParser.json())

// serve static assets from path resolved by 
// path.join which returns an absolute path based on __dirname
app.use(express.static(path.join(__dirname, '../student-sign-in-client', 'dist')))

// set /api/ routes to be handled by apiRoutes router object
app.use('/api', apiRoutes)

// generic error handling. If a response gets here it will return 404
app.use(function(req, res, next) {
  res.status(404).send('Not Found')
})

// generic error handling. If a response gets here it will return server error
app.use(function(err, req, res, next) {
  console.log(err.stack)
  res.status(500).send('Server Error')
})

// listen to port set by environment vvariable or port 3000
let server = app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${server.address().port}`)
})