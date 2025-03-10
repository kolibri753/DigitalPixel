document.addEventListener("DOMContentLoaded", () => {
  const opinionItems = document.querySelectorAll(
    ".opinions__list .opinions__title"
  );
  const titleElement = document.querySelector(
    ".opinions__content .opinions__title"
  );
  const textElement = document.querySelector(
    ".opinions__content .opinions__text"
  );

  opinionItems.forEach((item) => {
    item.addEventListener("click", () => {
      opinionItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      titleElement.textContent = item.getAttribute("data-title");
      textElement.textContent = item.getAttribute("data-text");
    });
  });
});
