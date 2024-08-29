document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const accordionBtns = document.querySelectorAll(".accordion__btn");
  const menuBtn = document.querySelector(".header__btn-menu");
  const closeMenuBtn = document.querySelector(".nav__btn-close");

  menuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleCloseMenu);

  accordionBtns.forEach((accordionBtn) => {
    accordionBtn.addEventListener("click", () => toggleAccordion(accordionBtn));
  });

  function toggleAccordion(clickedBtn) {
    accordionBtns.forEach((currentBtn) => {
      const accordion = currentBtn.parentElement.parentElement;
  
      if (clickedBtn === currentBtn) {
        currentBtn.textContent = currentBtn.textContent === "+" ? "-" : "+";
  
        if (accordion.offsetHeight > 60) {
          accordion.style.height = "60px";
          return;
        }
  
        accordion.style.height = accordion.scrollHeight + 10 + "px";
      } else {
        currentBtn.textContent = "+";
        accordion.style.height = "60px";
      }
    });
  }
  
  function toggleMenu(e) {
    e.preventDefault();

    nav.classList.remove("nav--inactive");
    nav.classList.add("nav--active");
  }

  function toggleCloseMenu(e) {
    e.preventDefault()
    
    nav.classList.remove("nav--active");
    nav.classList.add("nav--inactive");
  }
});