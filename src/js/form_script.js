function openform(formName) {
  var i;
  var x = document.getElementsByClassName("form");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(formName).style.display = "block";
}