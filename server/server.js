const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

// GET & POST Routes go here
app.get('/sampleRoute', (req, res) => {
  console.log('Got to /sampleRoute');
  res.send('returnSomething');
});

app.post('/sampleRoute', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.post('/guesses', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
}) //for posting guesses from client.js

