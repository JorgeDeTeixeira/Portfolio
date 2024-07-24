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
  const scrollPos = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    if (section.offsetTop < scrollPos) {
      section.style.backgroundColor = "#f0f8ff";
    } else {
      section.style.backgroundColor = "#f4f4f4";
    }
  });
});
