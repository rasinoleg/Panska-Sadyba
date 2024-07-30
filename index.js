// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   function changeActiveLink() {
//     let index = sections.length;

//     while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

//     navLinks.forEach((link) => link.classList.remove("active"));
//     if (navLinks[index]) {
//       navLinks[index].classList.add("active");
//     }
//   }

//   changeActiveLink();

//   window.addEventListener("scroll", changeActiveLink);

//   const galleryItems = document.querySelectorAll(".gallery-item");
//   const popup = document.getElementById("description-popup");
//   const descriptionText = document.getElementById("description-text");
//   const closeButton = document.getElementById("close-popup");

//   galleryItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       const description = this.getAttribute("data-description");
//       descriptionText.textContent = description;
//       popup.style.display = "block";
//     });
//   });

//   closeButton.addEventListener("click", function () {
//     popup.style.display = "none";
//   });
// });

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

  changeActiveLink();

  window.addEventListener("scroll", changeActiveLink);

  const galleryItems = document.querySelectorAll(".gallery-item");
  const popup = document.getElementById("description-popup");
  const descriptionText = document.getElementById("description-text");
  const closeButton = document.getElementById("close-popup");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const description = this.getAttribute("data-description");
      descriptionText.textContent = description;
      popup.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
