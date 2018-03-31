var config = {
    apiKey: "AIzaSyClYF6iB45hNsrvbv6lZdIc1TYJ9bYaKMo",
    authDomain: "trailmaps.firebaseapp.com",
    databaseURL: "https://trailmaps.firebaseio.com",
    projectId: "project-4793771504851102550",
    storageBucket: "project-4793771504851102550.appspot.com",
    messagingSenderId: "819702722487"
  };
  firebase.initializeApp(config);
  
  //text input and button constants
  var trail_name = document.querySelector('#trail_name');
  var trail_location = document.querySelector('#location');
    var postButton = document.querySelector('#post');
var fileButton = document.getElementById("fileButton");
         var username = null;
var loginButton = document.querySelector('#login');
var rootRef = firebase.database().ref();
var file;
var downloadURL;
    //postButton.style.display = "none";
   // trail_name.style.display = "none";

   fileButton.addEventListener('change', function(e){
              file = e.target.files[0];
                  
              });
   
   postButton.addEventListener("click", function() {
	   var storageRef = firebase.storage().ref("mi_snow/"+file.name);
                  storageRef.put(file);
				 // storageRef.getDownloadURL().then(function(url) {
                   var uploadTask = storageRef.put(file);
	   
	   uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
  alert("error");
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  downloadURL = uploadTask.snapshot.downloadURL;
  var msgUser = username;
      var trailName = trail_name.value;
      
      rootRef.child("mi_snow_trails").child(trailName).set({Trail_Name:trailName, Trail_Type:"snowmobile", Trail_Location:trail_location.value ,Trail_File_Url:downloadURL});
      trail_name.value = "";
	   
  alert(downloadURL);
});
	   
	   
	   
    
    });
