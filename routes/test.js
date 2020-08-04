const router = require('express').Router()

router.route('/').all((req, res, next) => {
  //put some validation logic or something here.
  res.resObj = {message: `You made a ${req.method.toUpperCase()} request!`}
  next()
}).get((req, res) => {
  res.json(res.resObj)
}).post((req, res) => {
  res.json(res.resObj)
}).patch((req, res) => {
  res.json(res.resObj)
}).delete((req, res) => {
  res.json(res.resObj)
})

module.exports = router
