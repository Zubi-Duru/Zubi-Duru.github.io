function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navDesign") {
      x.className += " responsive";
    } else {
      x.className = "navDesign";
    }
  };

