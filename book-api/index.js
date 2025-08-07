const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const books = require('./books');

app.use(express.json());
app.use('/api/books', books);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
