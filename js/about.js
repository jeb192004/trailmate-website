

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

function home() {
    window.location="index.html";
};

function facebook() {
    setTimeout(function () { window.location = "https://www.facebook.com/OrvTrailMate/"; }, 20);
	window.location = "fb://page/1731877297109570";
};
