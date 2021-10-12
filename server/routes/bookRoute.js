const express = require('express');
const { Router } = require('express')
const authController = require('../controllers/authControll')
const router = Router()
const books = require('../models/books')

router.get('/api/books', (request, response) => {
    books.find({}).then(books => response.json(books))
})

module.exports = router