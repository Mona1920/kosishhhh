const express = require('express');
const router = express.Router();

// In-memory book list
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" }
];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a single book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// Delete a book
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;

