document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-link");

  const toggleMenu = () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isOpen);
  };

  toggle.addEventListener("click", toggleMenu);

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") === "true") toggleMenu();
    });
  });
});
