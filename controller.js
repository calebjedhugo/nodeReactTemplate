const router = require('express').Router()

//log all hits to the api.
router.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

//Send all requests through all middleware.
router.use(require('./middleware'))

//Do we have what they are looking for?
router.use('/api/v1', require('./routes'))

//If they made it this far, it's time for that 404.
router.use((req, res, next) => {
  res.status(404).json(`Unable to find resource, '${req.originalUrl}'.`)
})

module.exports = router
