const mongoose = require('mongoose')

const url = 'mongodb+srv://batman:Batman007@cluster0.gjjup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const bookSchema = new mongoose.Schema({
    name: String,
    comment: String,
})

bookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('books', bookSchema)