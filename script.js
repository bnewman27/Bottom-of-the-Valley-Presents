const targetElement = document.querySelector("#rainbow")
new cursoreffects.rainbowCursor({element: targetElement});

// nav start
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
//   nav end