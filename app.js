const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('This is the Contact Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
