$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $('#submitButton').on('click', clickedSubmit)
  $('#restartButton').on('click', clickedRestart)

}

function clickedSubmit() {
  console.log('Test Log: in clickedSubmit');
  let guess1 = $('#player1Input').val();
  let guess2 = $('#player2Input').val();
  let guess3 = $('#player3Input').val();
  let guess4 = $('#player4Input').val();

  // create output object
  let guesses = {
    guess1: guess1,
    guess2: guess2,
    guess3: guess3,
    guess4: guess4
  }
  
  console.log(guesses);

  //sending guesses to server
  $.ajax({
    method: 'POST', // Getting information. 
    url: '/guesses', // Called a "route".
    data: guesses
  }).then(function (response) { // .then handles happy things; 2XX responses.
    console.log(response);
  }).catch(function (error) { // .catch handles bad things; 4XX or 5XX errors. 
    console.log(error)
    alert('Something went wrong with GET, try again.')
  }) // End Ajax .then and .catch functions. 
} // End clickedSubmit function. 


$.ajax({
  method: 'GET', // Getting information. 
  url: '/sampleRoute', // Called a "route".
}).then(function (response) { // .then handles happy things; 2XX responses.
  console.log(response);
}).catch(function (error) { // .catch handles bad things; 4XX or 5XX errors. 
  console.log(error)
  alert('Something went wrong with GET, try again.')
}) // End Ajax .then and .catch functions. 

// //#region ⬇ clickedSubmit functionality below:
// function clickedSubmit() {
//   console.log('Log Test: in clickedSubmit');
//   // ⬇ Declaring new object for input values:
//   let newItem = {
//     playerOne: $('#playerOneGuess').val(),
//     itemDescription: $('#descriptionInput').val(),
//   };
//   // ⬇ Having Ajax post the new item to inventoryArray: 
//   $.ajax({
//     method: 'POST', // Posting information. 
//     url: '/sampleRoute', // Called a "route".
//     data: newItem, // Becomes request.body on the server. 
//   }).then(function (response) { // .then handles happy things; 2XX responses.
//     console.log(response);
//     // ⬇ Re-run rendering of DOM. 
//     getInventoryArray();
//   }).catch(function (error) { // .catch handles bad things; 4XX or 5XX errors. 
//     console.log(error)
//     alert('Something went wrong with POST, try again.')
//   }) // End Ajax .then and .catch functions. 
//   // ⬇ Clear input values after click: 
//   $('.itemInputs').val("");
// } // End clickedSubmit function. 
// //#endregion ⬆ clickedSubmit functionality above.

function clickedRestart() {
  console.log('clicked restart')
}