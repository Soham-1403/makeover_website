// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page navigation
  const navLinks = document.querySelectorAll("a.nav-link");
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

  // Carousel with Smooth Fading Transition
  const carouselElement = document.querySelector("#heroCarousel");

  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });

    // Ensure smooth fading transition without flashes
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach((item, index) => {
      if (index === 0) {
        item.classList.add("active");
      } else {
        item.style.opacity = "0";
      }
    });

    carouselElement.addEventListener("slide.bs.carousel", function (event) {
      let currentSlide = carouselItems[event.from];
      let nextSlide = carouselItems[event.to];

      // Fade out the current slide
      currentSlide.style.opacity = "0";
      setTimeout(() => {
        currentSlide.classList.remove("active");
      }, 1000);

      // Fade in the next slide
      nextSlide.style.opacity = "1";
      nextSlide.classList.add("active");
    });
  }

  // Dark Mode Toggle
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

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

  // Lazy Loading for Gallery with Fade-in Effect & Clickable Preview
  const galleryContainer = document.getElementById("gallery-container");
  const imageCount = 10; // Adjust the number of images

  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `images/gallery/gallery${i}.jpg`;
    img.alt = `Gallery Image ${i}`;
    img.classList.add("gallery-img");
    img.loading = "lazy";

    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-6", "col-md-4");
    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);

    // Click event for previewing the full image
    img.addEventListener("click", function () {
      openImagePreview(this.src);
    });
  }

  // Function to open image preview in a modal
  function openImagePreview(imageSrc) {
    let modal = document.querySelector(".image-modal");
    
    if (!modal) {
      modal = document.createElement("div");
      modal.classList.add("image-modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <img src="${imageSrc}" alt="Preview Image">
        </div>
      `;
      document.body.appendChild(modal);

      // Close modal when clicking the close button
      modal.querySelector(".close-button").addEventListener("click", function () {
        modal.remove();
      });

      // Close modal when clicking outside the image
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.remove();
        }
      });
    }

    // Update the image source dynamically
    modal.querySelector("img").src = imageSrc;
    modal.style.display = "flex";
  }
});
