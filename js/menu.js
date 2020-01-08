var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'side': "right"
});

function menu() {
  slideout.toggle();
}



gapi.load('auth2', function() {
  /* Ready. Make a call to gapi.auth2.init or some other API */
});



function menu_item(item) {
  if (item.innerHTML === "Home") {
    window.location = "/";
  }
  if (item.innerHTML === "Add New Recipe") {
    checkIfLoggedIn();
  }

  if (item.innerHTML === "Relentless") {
    window.location = "guilds.html";
  }
  if (item.innerHTML === "Culmination of two") {
    window.location = "culminationoftwo.html";
  }
}


function onSignIn(googleUser)
{

  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  var myUserEntity = {};
  myUserEntity.Id = profile.getId();
  myUserEntity.Name = profile.getName();

  //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
  sessionStorage.setItem('myUserEntity', JSON.stringify(myUserEntity));

  //alert(profile.getName());   
}

function checkIfLoggedIn()
{
  if (sessionStorage.getItem('myUserEntity') == null) {
    //Redirect to login page, no user entity available in sessionStorage
    alert("You are not logged in.  Please log in first")
    window.location = "/"
  } else {
    //User already logged in
    var userEntity = {};
    window.location = "new_recipe"
    //userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));

  }
}




function logout()
{
  //Don't forget to clear sessionStorage when user logs out

  if (sessionStorage.getItem('myUserEntity') == null) {
    //Redirect to login page, no user entity available in sessionStorage
    alert("You are not logged in.  Please log in first")
    window.location = "/"
  } else {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });

    var userEntity = {};
    sessionStorage.clear();
    window.location = "/"
  }
}