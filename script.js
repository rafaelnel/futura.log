function Navbar_slide() {
    h = document.getElementById("nav_bar");
    if (h.style.display === "flex") {
      h.style.display = "none";
    } else {
      h.style.display = "flex";
    }
  }