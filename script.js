function Navbar_slide() {
    h = document.getElementById("nav_bar");
    if (h.style.display === "flex") {
      h.style.display = "none";
    } else {
      h.style.display = "flex";
    }
  }

  function Sanfona() {
    let sb = document.getElementById("qs_div");
    let sanf = document.getElementById("sanf");
    if (sb.style.display === "flex") {
      sb.style.display = "none";
    } else {
      sb.style.display = "flex";
    }
    if (sb.style.maxHeight) {
      sb.style.maxHeight = null;
    } else {
      sb.style.maxHeight = sb.scrollHeight + "px";
    } 
    sanf.classList.toggle("ativo");
    
  }

