//Function for hamburger menu
const navTransform = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Hamburger menu toggle on click
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animation for links opacity
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linksOpacity 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    //Animate hamburger menu
    hamburger.classList.toggle("toggle");
  });
};

navTransform();
