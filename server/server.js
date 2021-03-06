// ⬇ Server setup code below:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// ⬇ Generating random number, guesses, and round counter on page load: 
let randomNum;
let guesses;
let guessArray = [];
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
app.get('/results', (req, res) => {
  console.log('Got to /results');
  let roundObject = {
    rounds : roundCount
  }
  guessArray.push(roundObject);
  res.send(guessArray);
});

app.post('/guesses', (req, res) => {
  guesses = req.body;
  console.log(guesses); 
  checkGuesses(guesses);
  countRounds();
  res.sendStatus(201);
}) //for posting guesses from client.js

 // ⬇ Logic for restartButton below:
 app.get('/restart', (req, res) => {
  console.log('Got to /restart');
  randomNumberGen();
  roundCount = 0;
  let rounds = {roundCount};
  res.send(rounds);
  // countRounds();
});

// ⬇ Logic for generating random number to guess below: 
function randomNumberGen() {
  randomNum = Math.ceil(Math.random() * 25);
  console.log('Random number is:', randomNum);
}

// ⬇ Logic for guessing game/numbers below: 
function checkGuesses(object) {
  console.log('Test Log: in checkGuesses');
  // ⬇ Reset guessArray first:
  guessArray = [];
  for (let guesses in object) {
    // ⬇ Placeholder object:
    let newObj = {};
    console.log(`${guesses}: ${object[guesses]}`); 
    // ⬇ If one of the guesses is right, send back true:
    if (object[guesses] == randomNum) {
      newObj.won = '<label class="bg-success text-white" >WINNER!</label>';
    }
    // ⬇ If the guesses are too high or low, send back high/low: 
    else if (object[guesses] > randomNum){
      newObj.won = 'Too high!';
    }
    else {
      newObj.won = 'Too low!';
    } // End if/else winner conditional. 
    newObj.player = guesses;
    newObj.value = object[guesses];
  guessArray.push(newObj);
  } // End for in loop. 
  console.log(guessArray);
} // End checkGuesses function. 

// ⬇ Logic for round counter below: 
 function countRounds(){
  console.log('Test Log: in countRounds');
  roundCount += 1;
  console.log('The round count is: ', roundCount);
 } // End countRounds function. 