function initialSlider() {
  const track = document.querySelector(".carousel_track");
  const nextButton = document.querySelector(".carousel_button--right");
  const prevButton = document.querySelector(".carousel_button--left");
  const dotsNav = document.querySelector(".carousel_nav");
  const slides = Array.from(track.children);
  console.log(track);
  const dots = Array.from(dotsNav.children);

  prevButton.style.display = "none";
  const slideWidth = slides[0].getBoundingClientRect().width;
  console.log(slideWidth);

  const slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  slides.forEach(slidePosition);

  const moveSlide = (currentSlidwe, targetSlide) => {
    const amountToMove = targetSlide.style.left;
    track.style.transform = "translateX(-" + amountToMove + ")";
    currentSlidwe.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");
  };

  function updateDots(currentDot, targetDot) {
    currentDot.classList.remove("current_slide");
    targetDot.classList.add("current_slide");
  }

  function hideAndShowArrow(targetIndex) {
    if (targetIndex === 0) {
      prevButton.style.display = "none";
    } else if (targetIndex === slides.length - 1) {
      nextButton.style.display = "none";
      prevButton.style.display = "block";
    } else {
      prevButton.style.display = "block";
      nextButton.style.display = "block";
    }
  }

  nextButton.addEventListener("click", (e) => {
    const currentSlidwe = track.querySelector(".current_slide");
    const currentDot = dotsNav.querySelector(".current_slide");
    console.log(currentSlidwe);
    const nextSlide = currentSlidwe.nextElementSibling;
    const nextDot = currentDot.nextElementSibling;
    const targetIndex = slides.findIndex((slide) => slide === nextSlide);
    moveSlide(currentSlidwe, nextSlide);
    updateDots(currentDot, nextDot);
    hideAndShowArrow(targetIndex);
  });

  prevButton.addEventListener("click", (e) => {
    const currentSlidwe = track.querySelector(".current_slide");
    const currentDot = dotsNav.querySelector(".current_slide");

    console.log(currentSlidwe);
    const prevSlide = currentSlidwe.previousElementSibling;
    const prevDot = currentDot.previousElementSibling;
    const targetIndex = slides.findIndex((slide) => slide === prevSlide);
    moveSlide(currentSlidwe, prevSlide);
    updateDots(currentDot, prevDot);
    hideAndShowArrow(targetIndex);
  });

  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const currentSlide = track.querySelector(".current_slide");
    const currentDot = dotsNav.querySelector(".current_slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveSlide(currentSlide, targetSlide);
    //below is for to change css dots background color
    updateDots(currentDot, targetDot);
    hideAndShowArrow(targetIndex);
  });
}

window.addEventListener("load", initialSlider);
