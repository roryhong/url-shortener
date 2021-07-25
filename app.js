const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes')
const routes = require('./routes')
const app = express()
const port = 3000

require('./config/mongoose')

app.engine('hbs', exphbs({defaultLayout : 'main', extname : '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(routes)


app.listen(port , () => {
    console.log(`app is running on http://localhost:${port}`)
})