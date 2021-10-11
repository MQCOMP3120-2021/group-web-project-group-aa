const { Router } = require('express')
const authController = require('../controllers/authControll')
const router = Router()

//login
router.post('/api/login', authController.login_user)
//register
router.post('/api/register', authController.register_user)
//logout
router.get('/api/logout', authController.logout_user)
module.exports = router
