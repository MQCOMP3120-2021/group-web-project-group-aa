const express = require('express');
const {Router} = require('express')
const authController = require('../controllers/authControll')
const router = Router()
const Books = require('../models/books')

router.get('/api/books', (request, response) => {
    Books.find({}).then(books => response.json(books))
})

router.put('/api/books/:id', (request, response) => {
    Books.updateOne({_id: request.params.id}, {
        name: request.body.name,
        comment: request.body.comment,
        like: request.body.like
    }, (err, docs) => {
        if (err) {
            response.json(err)
        } else {
            response.json(request.body)
        }
    })
})

module.exports = router