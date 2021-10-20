const express = require('express');
const {Router} = require('express')
const authController = require('../controllers/authControll')
const router = Router()
const Books = require('../models/books')

router.get('/api/books', (request, response) => {
    Books.find({}).then(books => response.json(books))
})

router.post('/api/books', (request, response) => {
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        content: request.body.content,
        like: request.body.like,
        comment: request.body.comment
  }
  data.books.push(newBook) 
  response.json(newBook)
})

router.get('/api/books/:id', (request, response) => {
    Books.findById(request.params.id).then(data => response.json(data))
})

router.put('/api/books/:id', (request, response) => {
    Books.updateOne({_id: request.params.id}, {
        title: request.body.title,
        author: request.body.author,
        content: request.body.content,
        like: request.body.like,
        comment: request.body.comment
    }, (err, docs) => {
        if (err) {
            response.json(err)
        } else {
            response.json(request.body)
        }
    })
})

router.delete('/api/books/:id', (request, response) => {
    const id = Number(request.params.id)
    const len = data.books.length
    data.books = data.books.filter(b => b.id !== id)
    // check whether we really deleted something and complain if not
    if (data.books.length < len) {
        response.json("deleted")
    } else {
        response.status(404)
        response.send("<h1>Book not found</h1>")
    }
})

router.post('/api/books/:id/comments', (request, response) => {
    Books.updateOne({_id: request.params.id}, {
        $push: {comments: request.body.comment}
    }, (err, docs) => {
        if (err) {
            response.json(err)
        } else {
            response.json(request.body)
        }
    })
})

module.exports = router