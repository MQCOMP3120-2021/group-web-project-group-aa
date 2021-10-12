const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookiePraser = require('cookie-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoute')
const bookRoutes = require('./routes/bookRoute')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(cookiePraser())
//middleware
app.use(express.static('public'))

//DB connection
const dbUrl =
	'mongodb+srv://batman:Batman007@cluster0.gjjup.mongodb.net/books?retryWrites=true&w=majority'
mongoose
	.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => console.log('db connected'))
	.catch(err => console.log('db connection error', err))

//Auth api routes
app.use(authRoutes)
app.use(bookRoutes)

app.get('/', (require, response) => {
	response.send('<h1>Server is ready.</h1>')
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
