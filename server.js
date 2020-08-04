'use strict';

//express
const express = require('express')
const app = express()
const {env, port} = process.env
const defaultPort = 3001

if(!env){
  require('dotenv').config();
}

app.use(require('./controller.js'))

app.listen(port || defaultPort, () => console.log(`Server listening on port ${port || defaultPort}!`))
