'use strict';

//express
const express = require('express')
const app = express()

/*Environment variables: (Make a .env file:
username=you
password=myPassword
env=tst
database=megaBass
host=megaBass.com
)*/
if(!process.env.username){
  require('dotenv').config();
}
const env = process.env.env

//Database connection
const mysql = require('mysql')
var conn = mysql.createConnection({
  host     : process.env.host,
  user     : process.env.username,
  password : process.env.password,
  database : `${process.env.database}${env}`
});
conn.connect();

//cors for developement environment.
const cors = require('cors')
app.get('/:3000', cors(), function (req, res, next) {
  next();
})

//bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//api calls
const request = require('request');
const urlRegExp = /^whoDoYouTrust$/
//argsObj = {type: 'POST', url: 'http://...', data: {JSON: 'string'}, cookies: {['key1=value1', 'key2=value2']} success: data => {}}
function ajax(argsObj) {
  var requestObj = {
    uri: argsObj.url,
    method: argsObj.type,
    auth: {
      'user': process.env.username,
      'pass': urlRegExp.test(argsObj.url) ? process.env.password : '',
      'sendImmediately': true
    }
  }

  if(argsObj.data && argsObj.type === 'POST'){
    requestObj.json = true;
    requestObj.body = argsObj.data;
  }

  if(argsObj.cookies){
    var j = request.jar();
    argsObj.cookies.forEach(cookieString => {
      j.setCookie(request.cookie(cookieString), argsObj.url);
    })
    requestObj.jar = j
  }

  request(requestObj, (err, response, body) => {
    if(err) {
      return argsObj.success(body, err)
    }
    response = response.toJSON()
    if(response.statusCode !== 200){
      console.log(`Status code from ${response.request.uri.path} was ${response.statusCode}`)
    }
    if(argsObj.success){
      argsObj.success(body, err, response.statusCode)
    }
  })
}

//hello server and database connection!
app.get('/helloWorld', (req, res) => {
  res.json('Hello Server!')
})

//sererside is 3001 until there is a reason for it to be something else.
const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}!`))
