

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//Enlarging images on click 

  img = document.getElementById("myslides");
        // Function to set image dimensions
        function enlargeImg() {
            img.style.width = "60%";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";

        }
        // Function to reset image dimensions
        function resetImg() {
            img.style.width = "40%";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
            document.getElementById("Button").style.display= "none";
        }

        function showbutton(){
            var x = document.getElementById("Button");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

