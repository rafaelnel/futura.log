function Navbar_slide() {
    h = document.getElementById("nav_bar");
    if (h.style.display === "flex") {
      h.style.display = "none";
    } else {
      h.style.display = "flex";
    }
  }


var menuicon = document.getElementById("menu-icon");
var navbar = document.getElementById("nav_bar");
var ul = navbar.firstElementChild;

function Menu() {
  let c = (ul.childElementCount)*50;
  
  if (ul.style.display == "flex") {
    navbar.style.height = 0;
    ul.style.display = "none";
    menuicon.classList.remove("fa-xmark");
    menuicon.classList.add("fa-bars");
    
  } else {
    navbar.style.height = c + "px";   
    menuicon.classList.add("fa-xmark");
    menuicon.classList.remove("fa-bars");
    ul.style.display = "flex"
  }
}