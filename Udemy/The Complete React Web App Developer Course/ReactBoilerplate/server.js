var express = require('express');

// Create an app
var app = express();

// Folder to server
app.use(express.static('public'));

// Port and listen
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});