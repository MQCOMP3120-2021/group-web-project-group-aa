const { Router } = require('express')
const bookController = require('../controllers/bookControll')
const router = Router()

//get all books
router.get('/api/books', bookController.get_books)
//add one book
router.post('/api/books', bookController.post_books)
//get one book
router.get('/api/books/:id', bookController.get_singlebook)
//delete one book
router.delete('/api/books/:id', bookController.delete_singlebook)
//edit one book
router.put('/api/books/:id', bookController.edit_content)
module.exports = router