function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navDesign") {
      // x.className += " responsive";
      x.classList.add("active");
    } else {
      // x.className = "navDesign";
      x.classList.remove("active")
    }
  };

