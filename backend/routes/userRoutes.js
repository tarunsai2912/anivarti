const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.get('/all', authMiddleware, userController.getAllUsers)

module.exports = router
