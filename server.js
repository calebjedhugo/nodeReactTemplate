'use strict';

//express
const express = require('express')
const app = express()

//Environment variables.
if(!process.env.username){
  require('dotenv').config();
}
const env = process.env.env

//Database connection
const mysql = require('mysql')
var conn = mysql.createConnection({
  host     : 'calebhugo.com',
  user     : process.env.username,
  password : process.env.password,
  database : `calebh6_${env}`
});
conn.connect();

const cors = require('cors')
app.get('/:3000', cors(), function (req, res, next) {
  next();
})

var bodyParser = require('body-parser')
app.use(bodyParser.json())

//hello server and database connection!
app.get('/helloWorld', (req, res) => {
  var sql = `SELECT * FROM USER_DATA WHERE USERNAME = 'Caleb Hugo'`
  conn.query(sql, (err, data) => {
    if(err) {console.log(err, sql, 'hellworld')}
    data = data[0];
    res.json(`Hello ${data.USERNAME}. This is you data: ${data.USERDATA}`)
  })
})

//sererside is 3001 until there is a reason for it to be something else.
const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}!`))
