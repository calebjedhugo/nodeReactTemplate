const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/:3000', cors(), function (req, res, next) {
  next();
})

app.get('/helloWorld', (req, res) => {
  res.send('Hello Server!')
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
