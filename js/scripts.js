// client-side js
// run by the browser each time your view template referencing it is loaded
const dreamsList = document.getElementById('recipes');


$.get('/list_recipes', function(data) {
  for (var i = 0; i < data.length; i++) {
    document.querySelector('#recipes').innerHTML += guildListHtml(data[i].split('_').join(' ').replace('.json', ''));

    //appendNewDream(data[i].replace('.txt',''));
  }
});

let dreams = [];



const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  //newListItem.addEventListener("click", liCliked, false);

  newListItem.innerHTML = dream;
  $('.recipeList li').on('click', function() {
    alert('yes')
  });


  dreamsList.appendChild(newListItem);

}

const site = 'myrecipes'

function recipe_page() {
  window.location = 'https://' + site + '.glutch.me/' //+ recipeName;
}


function new_recipe() {
  window.location = 'https://' + site + '.glitch.me/new_recipe';

}

function getPaging(str) {
  //alert(str)
  window.location = 'https://' + site + '.glitch.me/' + str;
}

function guildListHtml(name) {

  //console.log( toons );
  var html = '';
  html += '<li id="' + name.split(' ').join('_') + '" class="recipeListItem" onclick="getPaging(this.id)" style="background-color: white">';
  html += '<div class="toonlist" >';

  html += '<div> <p class="lead">' + name + '</p>';
  //html += '<p>'+desc+'</p>';
  //html += '<p style="display:none">'+members+'</p>';
  //html += '<p class="id" style="display:none">'+gp+'</p>';
  html += '</div>';
  html += '</div>';
  html += '</li>';
  return html;

}


$(".tab").on("click", function() {
  $(this).focus()
})

$("#recipe").focus();