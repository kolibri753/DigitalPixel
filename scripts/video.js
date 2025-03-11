import CONFIG from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
  const videoTrigger = document.getElementById("videoTrigger");
  const modal = document.getElementById("videoModal");
  const closeModal = document.querySelector(".modal__close");
  const overlay = document.querySelector(".modal__overlay");
  const modalVideo = document.getElementById("modalVideo");

  const videoURL = CONFIG.VIDEO_URL;

  videoTrigger.addEventListener("click", function () {
    modal.style.display = "flex";
    modalVideo.setAttribute(
      "src",
      videoURL + "?autoplay=1&rel=0&modestbranding=1"
    );
  });

  function closeVideoModal() {
    modal.style.display = "none";
    modalVideo.setAttribute("src", "");
  }

  closeModal.addEventListener("click", closeVideoModal);
  overlay.addEventListener("click", closeVideoModal);

  window.addEventListener("load", function () {
    modalVideo.src = "";
  });
});
