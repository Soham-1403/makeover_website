document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for in-page navigation
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const targetSection = document.querySelector(this.hash);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Initialize Bootstrap Carousel (fade effect handled by the carousel-fade class)
  const carouselElement = document.querySelector("#heroCarousel");
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      pause: false,
      wrap: true,
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
  const imageCount = 10; // Adjust the number of images as needed

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

  // Function to open image preview in a custom modal
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
      modal.querySelector(".close-button").addEventListener("click", function () {
        modal.remove();
      });
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.remove();
        }
      });
    }
    modal.querySelector("img").src = imageSrc;
    modal.style.display = "flex";
  }
});
