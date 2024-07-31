document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink();

  // Модальное окно
  const galleryItems = document.querySelectorAll(".gallery-item");
  const popup = document.getElementById("description-popup");
  const closePopup = document.getElementById("close-popup");
  const descriptionText = document.getElementById("description-text");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const description = item.dataset.description;
      descriptionText.textContent = description;
      popup.style.display = "block";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Лайки
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // предотвращаем открытие модального окна
      button.style.backgroundColor =
        button.style.backgroundColor === "red" ? "rgba(255, 0, 0, 0.8)" : "red";
    });
  });
});
