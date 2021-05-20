// ⬇ Server setup code below:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;



// ⬇ Generating random number, guesses, and round counter on page load: 
let randomNum;
let guesses;
randomNumberGen();

let roundCount = 0;

// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({extended:true}))

// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static('server/public'));

// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

// ⬇ GET & POST Routes below:
app.get('/sampleRoute', (req, res) => {
  console.log('Got to /sampleRoute');
  
  res.send('returnSomething');
});

app.post('/sampleRoute', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.post('/guesses', (req, res) => {
  guesses = req.body;
  console.log(guesses);
  checkGuesses(guesses);
  countRounds();
  res.sendStatus(201);
}) //for posting guesses from client.js

// You should generate a random number between 1 and 25 on the server.
// The server will check each guess against the random number.
// ⬇ Logic for guessing game/numbers below: 
function randomNumberGen() {
  randomNum = Math.ceil(Math.random() * 25);
  console.log('Random number is:', randomNum);
}

function checkGuesses(object) {
  console.log('Test Log: in checkGuesses');
  for (let guesses of object) {
    console.log(`${guesses}: ${object[guesses]}`); // Something wrong with object. 
  }
}

  


  
  
 function countRounds(){
  console.log('Test Log: in countRounds');
  roundCount += 1;
  return roundCount; 
 } 