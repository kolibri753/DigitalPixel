document.addEventListener("DOMContentLoaded", function () {
  const speakers = document.querySelectorAll(".experts__speaker");
  let currentIndex = 0;
  const intervalTime = 5000;

  function changeSpeaker() {
    const currentSpeaker = speakers[currentIndex];
    currentSpeaker.classList.add("speaker--hide");
    setTimeout(() => {
      currentSpeaker.classList.remove("speaker--active", "speaker--hide");
      currentSpeaker.style.display = "none";
      currentIndex = (currentIndex + 1) % speakers.length;
      const nextSpeaker = speakers[currentIndex];
      nextSpeaker.style.display = "block";
      setTimeout(() => {
        nextSpeaker.classList.add("speaker--active");
      }, 50);
    }, 800);
  }

  speakers[currentIndex].style.display = "block";
  speakers[currentIndex].classList.add("speaker--active");

  setInterval(changeSpeaker, intervalTime);
});
