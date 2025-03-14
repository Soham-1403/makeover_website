document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page navigation
  const navLinks = document.querySelectorAll('a.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const targetSection = document.querySelector(this.hash);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Set custom interval duration (time each slide stays) for the hero carousel
  let slideDuration = 2000; // Default is 2 seconds (change as needed)
  function setCarouselInterval(duration) {
    const carousel = document.querySelector("#heroCarousel");
    if (carousel) {
      let carouselInstance = new bootstrap.Carousel(carousel, {
        interval: duration,
        ride: "carousel",
      });
    }
  }
  setCarouselInterval(slideDuration);

  // Dynamic Gallery Insertion with Lazy Loading and Preview
  const galleryContainer = document.getElementById("gallery-container");
  const imageCount = 10; // Set the number of images you have in the folder

  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `images/gallery/gallery${i}.jpg`; // Assuming images are named gallery1.jpg, gallery2.jpg, etc.
    img.alt = `Gallery Image ${i}`;
    img.classList.add("gallery-img");
    img.loading = "lazy"; // Enable lazy loading

    img.addEventListener("load", () => {
      img.classList.add("loaded"); // Apply fade-in effect when loaded
    });

    // --- Gallery Image Preview: Show complete image on click ---
    img.addEventListener("click", () => {
      const modalImg = document.getElementById("fullImage");
      modalImg.src = img.src;
      // Use the Bootstrap modal with id "imageModal" (must be defined in your HTML)
      const imageModalElement = document.getElementById("imageModal");
      const imageModal = new bootstrap.Modal(imageModalElement);
      imageModal.show();
    });
    // --- End of Gallery Image Preview ---

    // Wrap the image in a Bootstrap grid column (3 per row on medium screens)
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-6", "col-md-4");
    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);
  }

  // Dark Mode Toggle
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;
  // Check saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = "☀️ Light Mode";
  }
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.innerHTML = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.innerHTML = "🌙 Dark Mode";
    }
  });
});
