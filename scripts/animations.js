document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".section__box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("section__box--visible");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  boxes.forEach((box) => observer.observe(box));
});
