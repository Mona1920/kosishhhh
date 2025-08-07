const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const books = require('./books'); // importing books.js

app.use(express.json());
app.use('/api/books', books); // using the routes

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
