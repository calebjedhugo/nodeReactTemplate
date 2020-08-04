const router = require('express').Router()

//Special things just for running locally.
const {env} = process.env
if(env === 'dev'){
  router.use(require('./dev.js'))
}

//Just the stuff production needs.
router.use(require('./util.js'))

module.exports = router
