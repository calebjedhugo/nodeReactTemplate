/*Environment variables: (Make a .env file that includes: env=dev)

This file will only be active if `process.env.env` is set to 'dev'
*/

const router = require(express).Router()

//cors for developement environment. Allows the local ':3000' front end access to the api.
const cors = require('cors')
router.get('/:3000', cors(), function (req, res, next) {
  next();
})

module.exports = router
