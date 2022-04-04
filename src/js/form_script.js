function openform(formName) {
  var i;
  var x = document.getElementsByClassName("form");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(formName).style.display = "block";
}

function prewiewImage(img,input) {
  let photo = document.getElementById(img)
  let file = document.getElementById(input).files[0]

  let reader = new FileReader()

  reader.onloadend = function () {
    photo.src = reader.result
  }

  if (file) {
    reader.readAsDataURL(file)
  } else {
    photo.src = ''
  }
}