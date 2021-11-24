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

//Parallax
const parallaxAnimations = () => {
  let clouds = document.querySelector(".clouds");
  let sun = document.querySelector(".sun");
  let mountain_back = document.querySelector(".mountain_back");
  let header_text = document.querySelector(".header_text");
  let front = document.querySelector(".front");
  let fishes = document.querySelector(".fishes");

  //Scroll animations
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    clouds.style.left = value * 0.25 + "px";
    sun.style.top = value * 1.05 + "px";
    mountain_back.style.top = value * 0.4 + "px";
    front.style.top = value * 0 + "px";
    header_text.style.marginLeft = value * 4 + "px";
    fishes.style.marginLeft = value * -0.2 + "px";
  });
};

parallaxAnimations();
