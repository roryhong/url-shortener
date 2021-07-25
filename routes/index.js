const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const shorturl = require('./modules/shorturl')

router.use('/', home)
router.use('/shorturl', shorturl)

module.exports = router