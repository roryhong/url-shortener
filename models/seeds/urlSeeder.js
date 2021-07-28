const url = require('../url')
const db = require('../../config/mongoose')


const urlData = [
    {
        "originalUrl": "http://google.com",
        "shortUrl": "7zq6o"
    },
    {
        "originalUrl": "http://youtube.com",
        "shortUrl": "OHrsP"
    },
    {
        
        "originalUrl": "http://codepen.com",
        "shortUrl": "H1U8V"
    }
]


db.once('open' , () => {
    url.create(urlData)
      .then(() => {
          console.log('urlSeeder is connect')
          return db.close
      })
})