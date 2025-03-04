const ready = () => {
  // const $ = document.getElementById;
  const buttonMenuToggle = document.getElementById("toggle-menu");
  let currentState = buttonMenuToggle.dataset.state;
  const menuToToggle = document.getElementById("left-nav");

  buttonMenuToggle.addEventListener("click", () => {
    // buttonMenuToggle.classList.toggle("icon-x");
    let nextState = "";
    if (currentState == "CLOSE") {
      nextState = "OPEN";
    } else if (currentState == "OPEN") {
      nextState = "CLOSE";
    }
    buttonMenuToggle.dataset.state = nextState;
    currentState = nextState;

    menuToToggle.classList.toggle("open");
  })
}

document.addEventListener("DOMContentLoaded", ready);