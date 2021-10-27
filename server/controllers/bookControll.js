const Books = require('../models/books')
const isEmpty = require('lodash/isEmpty')

module.exports.allBooks = async (req, res) => {
	try {
		const result = await Books.find()
		res.status(200).json({ result })
	} catch (err) {
		res.status(500).json('internal system error --book')
	}
}

module.exports.addBooks = async (req, res) => {
	const { title, author, content, like, comment } = req.body

	const bookData = { title, author, content, like, comment }

	try {
		await Books.create(bookData)
		const result = await Books.find()
		res.status(200).json(result)
	} catch (err) {
		res.status(500).json('internal system error --book')
	}
}

module.exports.findBooks = async (req, res) => {
	const { id } = req.params
	try {
		const result = await Books.findById(id)
		res.status(200).json(result)
	} catch (err) {
		res.status(500).json('internal system error --book')
	}
}
module.exports.findBooksByTitle = async (req, res) => {
	const { titleText } = req.params
	try {
		const result = await Books.find({ title: titleText })
		res.status(200).json(result)
	} catch (err) {
		res.status(500).json('internal system error --book')
	}
}
module.exports.addComment = async (req, res) => {
	const { id, commentText, userId } = req.body
	try {
		await Books.findByIdAndUpdate(
			{ _id: id },
			{
				$push: { comments: { author: userId, comments: commentText } }
			}
		)
		const result = await Books.find({ _id: id })
		res.status(200).json(result[0])
	} catch (err) {
		res.status(500).json('internal system error --book')
	}
}

module.exports.addLike = async (req, res) => {
	const { id, userid } = req.params
	const result = await Books.find({ _id: id, like: userid })
	let likeStatus = false
	if (isEmpty(result)) {
		try {
			await Books.updateOne(
				{ _id: id },
				{
					$push: { like: userid }
				}
			)
			likeStatus = true
		} catch (err) {}
	} else {
		try {
			await Books.updateOne(
				{ _id: id },
				{
					$pull: { like: userid }
				}
			)
		} catch (err) {}
	}
	const result2 = await Books.find({ _id: id })
	res.status(200).json({ newdata: result2, likeStatus })
}

module.exports.likedBook = async (req, res) => {
	const { userid } = req.params
	try {
		const result = await Books.find({ like: userid })
		res.status(200).json({ result })
	} catch (err) {
		res.status(500).json('cant find --book')
	}
}
