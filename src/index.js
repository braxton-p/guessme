const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// middleware to prevent search engine indexing
app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'none');
  next();
});

app.get('/', (req, res) => {
   res.send('Hello, World!'); 
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});