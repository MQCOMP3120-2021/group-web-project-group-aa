const { Router } = require('express')
const bookController = require('../controllers/bookControll')
const router = Router()

//get all books
router.get('/api/books', bookController.allBooks)

//add book
router.post('/api/books', bookController.addBooks)

//get a specific book by book id
router.get('/api/books/id/:id', bookController.findBooks)
//add comment
router.post('/api/books/comment', bookController.addComment)
//add a like
router.put('/api/books/:id/:userid', bookController.addLike)

//find a book by title
router.get('/api/books/:titleText', bookController.findBooksByTitle)

//find a book which liked by a user
router.get('/api/books/user/:userid', bookController.likedBook)

module.exports = router
