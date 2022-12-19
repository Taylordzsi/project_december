function hamburger() {
  let x = document.getElementById("menuID");
  if (x.className == "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
