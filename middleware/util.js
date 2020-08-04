const router = new express().Router()

//bodyParser
const bodyParser = require('body-parser')
router.use(bodyParser.json())

module.exports = router
