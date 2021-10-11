const jwt = require("jsonwebtoken")
const Books = require("../models/books")

module.exports.get_books = async (req, res) => {
    res.json(data.books)
}

module.exports.post_books = async (req, res) => {
  const body = req.body
  console.log(body)
  const newBook = {
      title: body.title,
      author: body.author,
      content: body.content,
      like: body.like,
      id: data.books.length   
  }
  data.books.push(newBook) 
  res.json(newBook)
}

module.exports.get_singlebook = async (req, res) => {
  const id = Number(req.params.id)
  const book = data.books.filter(b => b.id === id)[0]
  // return a 404 if there is no such unit
  if (book) {
    res.json(book)
  } else {
    res.status(404)
    res.send("<h1>Book not found.</h1>")
  }
}

module.exports.delete_singlebook = async (req, res) => {
  const id = Number(req.params.id)
  const len = data.books.length
  data.books = data.books.filter(b => b.id !== id)
  // check whether we really deleted something and complain if not
  if (data.books.length < len) {
    res.json("deleted")
  } else {
    res.status(404)
    res.send("<h1>Book not found</h1>")
  }
}

module.exports.edit_content = async (req, res) => {
  const newBook = req.body
  const id = Number(req.params.id)
  data.units = data.books.map(b => id === b.id ? newBook : b)
  console.log("updated", newBook)
  res.json(newBook)
}