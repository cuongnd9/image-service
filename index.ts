import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function(req, res) {
  res.send('Xin chào 👋');
});

app.listen(8000, function() {
  console.log('Server is listening on port 8000!');
});
