const express = require('express')
const router = express.Router()
const generate = require('../../tool/generator')
const Url = require('../../models/url')


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const inputUrl = req.body.inputUrl.trim()
    let baseUrl = req.headers.host
    

    Url.find()
        .lean()
        .then(allUrl => {
            //確認是否已有網址
            existUrl = allUrl.filter(findUrl => findUrl.originalUrl === inputUrl)
            let short = ''
            if (existUrl.length === 1) {
                short = existUrl[0].shortUrl
            } else {
                short = generate(5)
            
                //確認是否有重複的shortUrl
                while (allUrl.some(findUrl => findUrl.shortUrl === short)) {
                    short = generate(5)
                }
            }
                Url.create({
                    originalUrl: inputUrl,
                    shortUrl: short
                })
            

            if(baseUrl === 'localhost:3000') {
                baseUrl = `http://${baseUrl}/${short}`
            }else {
                baseUrl = `https://${baseUrl}/${short}`
            }

            res.render('index', { inputUrl, short, baseUrl })
            
        })
        .catch(error => {
            console.log(error)
            res.redirect('/')
        })
})

//連接網頁
router.get('/:short', (req, res) => {
    Url.find({ shortUrl: req.params.short })
        .lean()
        .then(short => {
            if (short.length === 1) {
                res.redirect(short[0].originalUrl)
            } else {
                res.redirect('/')
            }
        })
})

module.exports = router