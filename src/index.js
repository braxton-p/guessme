const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// middleware to prevent search engine indexing
app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'none');
  next();
});

app.use(express.static('public'));

// if nothing has used up the request until now
// it must be a 404
app.use((req, res, next) => {
  res.status(404).send("404. That file must be on another server...");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});