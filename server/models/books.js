const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	title: String,
	comments: Array,
	like: Array,
	content: String,
	author: String
})

// bookSchema.static.getAllBooks = async function () {
// 	const allBooks = await this.find().toArray
// 	return allBooks
// }

bookSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})
const Books = mongoose.model('books', bookSchema)
module.exports = Books
