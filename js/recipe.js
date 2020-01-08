var url = window.location.pathname;
var recipeName = url.substring(url.lastIndexOf("/") + 1);
var recipeName1 = recipeName.replace(/_/g, " ");
document.getElementById("header__title").innerHTML = recipeName1;

const ingredientList = document.getElementById("ingredients");
const instructionsList = document.getElementById("instructions");

var parameters = { name: recipeName };

$.get("/get_recipe", parameters, function(data) {
  data = JSON.parse(data)[0];
  var ingredients = data.ingredients;
  var instructions = data.instructions;

  var arrayLength = ingredients.length;
  for (var i = 0; i < arrayLength; i++) {
    appendIngredients(ingredients[i]);
  }

  var arrayLength = instructions.length;
  for (var i = 0; i < arrayLength; i++) {
    appendInstructions(instructions[i]);
  }
});

let instructionsArray = [];
let ingredientsArray = [];

const appendIngredients = function(ingredients) {
  const newListItem = document.createElement("li");
  newListItem.innerHTML = ingredients;
  ingredientList.appendChild(newListItem);
};

const appendInstructions = function(instructions) {
  const newListItem = document.createElement("li");
  newListItem.innerHTML = instructions;
  instructionsList.appendChild(newListItem);
};

function share() {
  let url = document.location.href;

  if (navigator.share) {
    navigator
      .share({
        title: toTitleCase(recipeName1),
        text: "Check out this recipe!!!",
        url: url
      })
      .then(() => console.log("Successful share"))
      .catch(error => console.log("Error sharing", error));
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}