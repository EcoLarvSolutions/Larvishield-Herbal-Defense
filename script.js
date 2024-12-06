document.addEventListener("DOMContentLoaded", function () {
  // Slideshow Functionality
  const slides = document.querySelectorAll(".slide");
  const slideTexts = document.querySelectorAll(".side-content p");
  let slideIndex = 0;

  function showSlides() {
    // Hide all slides and paragraphs
    slides.forEach((slide) => (slide.style.display = "none"));
    slideTexts.forEach((text) => (text.style.display = "none"));

    // Show the current slide and corresponding paragraph
    if (slides[slideIndex]) slides[slideIndex].style.display = "block";
    if (slideTexts[slideIndex]) slideTexts[slideIndex].style.display = "block";

    // Move to the next slide
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }

  if (slides.length > 0) showSlides(); // Start the slideshow if slides exist

  // Video Modal Functionality
  const videoModal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const closeModal = document.getElementById("close-modal");
  const videoItems = document.querySelectorAll(".video-item");

  videoItems.forEach((item) => {
    const iframe = item.querySelector(".video");
    if (!iframe) return;

    iframe.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent iframe default actions
      if (videoModal && modalVideo) {
        videoModal.style.display = "flex";
        modalVideo.src = iframe.src; // Set the modal iframe source to the clicked video
      }
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      if (videoModal && modalVideo) {
        videoModal.style.display = "none";
        modalVideo.src = ""; // Stop video playback
      }
    });
  }

  // About Section Paragraph Slideshow
  const paragraphs = document.querySelectorAll(".about-paragraph");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  // Function to show the current paragraph
  function showParagraph(index) {
    paragraphs.forEach((p, i) => {
      p.style.display = i === index ? "block" : "none";
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length; // Go to the previous paragraph
      showParagraph(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % paragraphs.length; // Go to the next paragraph
      showParagraph(currentIndex);
    });
  }

  if (paragraphs.length > 0) showParagraph(currentIndex); // Initial Display
});
