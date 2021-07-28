const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

require('./config/mongoose')

app.engine('hbs', exphbs({defaultLayout : 'main', extname : '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true }))
app.use(routes)


app.listen(PORT , () => {
    console.log(`app is running on http://localhost:${PORT}`)
})