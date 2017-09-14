var express = require('express')
var path = require('path')

var app = express()
var port = process.env.PORT || 9000

/* static resources */
app.use(express.static(path.join(__dirname, 'public')))

/* favicon */
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/favicon.png'))
})

/* invalid */
app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/404.html'))
})

/* all others */
app.get('*', function (req, res) {
  res.redirect('/404')
})

/* conversion post */
app.post('/', (req, res) => {

})

/* start app */
app.listen(port)
