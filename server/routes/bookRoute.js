const { Router } = require('express')
const bookController = require('../controllers/bookControll')
const router = Router()

//get all text
router.get('/api/texts', bookController.get_books)
//post all text
router.post('/api/texts', bookController.post_books)
//get one text
router.get('/api/texts/:id', bookController.get_singlebook)
//delete one text
router.delete('/api/texts/:id', bookController.delete_singlebook)
//edit one text
router.put('/api/texts/:id', bookController.edit_content)
module.exports = router