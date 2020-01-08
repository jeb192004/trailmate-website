// client-side js
// run by the browser each time your view template referencing it is loaded
if (sessionStorage.getItem('myUserEntity') == null) {
  //Redirect to login page, no user entity available in sessionStorage
  alert("You are not logged in.  Please log in first")
  window.location = "/"
}

let ingredients = [];
let instructions = [];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const instructionsList = document.getElementById('instructions');
const dreamsForm = document.forms[0];
const instructionsForm = document.forms[1];
const recipeAmountInput = dreamsForm.elements['recipeAmnt'];
const recipeIngredientInput = dreamsForm.elements['recipeIngredient'];
const recipeInstructionsInput = instructionsForm.elements['recipeInstructions'];


// a helper function to call when our request for dreams is done
/**const getDreamsListener = function() {
  // parse our response to convert to JSON
  dreams = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  dreams.forEach( function(row) {
    appendNewDream(row.dream);
  });
}**/

// request the dreams from our app's sqlite database
const dreamRequest = new XMLHttpRequest();
//dreamRequest.onload = getDreamsListener;
dreamRequest.open('get', '/getDreams');
dreamRequest.send();

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

const appendNewInstruction = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  instructionsList.appendChild(newListItem);
}

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  ingredients.push({ amount: recipeAmountInput.value, ingredtient: recipeIngredientInput.value });
  appendNewDream(recipeAmountInput.value + ' ' + recipeIngredientInput.value);

  // reset form 
  recipeAmountInput.value = '';
  recipeAmountInput.focus();
  recipeIngredientInput.value = '';
  recipeIngredientInput.focus();
};

instructionsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  instructions.push(recipeInstructionsInput.value);
  appendNewInstruction(recipeInstructionsInput.value);

  // reset form 
  recipeInstructionsInput.value = '';
  recipeInstructionsInput.focus();
};

function save() {
  let name = document.getElementById('name');
  let recipe = [];
  let recipeIngredients = [];
  let recipeInstructions = [];
  var items = dreamsList.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
    recipeIngredients.push(items[i].innerHTML);
  };
  var instructionsItems = instructionsList.getElementsByTagName("li");
  for (var i = 0; i < instructionsItems.length; ++i) {
    recipeInstructions.push(instructionsItems[i].innerHTML);
  };
  recipe.push({ instructions: recipeInstructions, ingredients: recipeIngredients });

  var parameters = { recipe: recipe, name: name.value.toLowerCase().split(' ').join('_') };
  $.get('/add_recipe', parameters, function(data) {
    alert(data);
    window.history.back();
  });
  name.value = '';
  dreamsList.innerHTML = '';
  instructionsList.innerHTML = '';


}