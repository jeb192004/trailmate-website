var search1 = "false";
document.getElementById("searchText").style.display = 'none';

function search() {
  if (search1 == "false") {
    document.getElementById("searchText").style.display = 'inline';
    document.getElementById("searchtxt").focus();

    document.getElementById("area_list").style.display = 'none';
    search1 = "true";
    if ($(window).width() > 739) {} else {
      document.getElementById("header__title").style.display = 'none';
    }
  } else {
    document.getElementById("searchText").style.display = 'none';
    document.getElementById("header__title").style.display = 'inline';
    if ($(window).width() > 739) {
      //Add your javascript for large screens here 
    }
    else {
      //Add your javascript for small screens here 
      document.getElementById("area_list").style.display = 'inline';
    }
    search1 = "false";
  }
}

function filter(element) {
  var value = $(element).val();
  value = value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  $("#toons > li").each(function() {
    if ($(this).text().search(value) > -1) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
}