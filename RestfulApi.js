
const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Rich daddy and poor daddy' },
  { id: 2, title: 'The investor' },
  { id: 3, title: 'The mystery ' },
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  res.json(book);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});