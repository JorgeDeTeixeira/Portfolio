// scripts.js

// Exemplo de um script para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animação de rolagem
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos <= section.offsetTop + section.offsetHeight
    ) {
      section.style.backgroundColor = "#e0e0e0";
    } else {
      section.style.backgroundColor = "transparent";
    }
  });
});
