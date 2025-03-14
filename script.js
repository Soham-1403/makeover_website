// Wait for the DOM to be fully loaded
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
});

// Set custom interval duration (time each slide stays)
let slideDuration = 2000; // Default is 2 seconds (change this as needed)

// Function to set carousel interval dynamically
function setCarouselInterval(duration) {
  const carousel = document.querySelector("#heroCarousel");
  if (carousel) {
    let carouselInstance = new bootstrap.Carousel(carousel, {
      interval: duration, // Set slide duration
      ride: "carousel",
    });
  }
}

// Apply the custom duration
setCarouselInterval(slideDuration);


document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");
  const imageCount = 10; // Set the number of images you have in the folder

  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `images/gallery/gallery${i}.jpg`; // Assuming images are named gallery1.jpg, gallery2.jpg, etc.
    img.alt = `Gallery Image ${i}`;
    img.classList.add("gallery-img");
    img.loading = "lazy"; // Lazy load the images

    img.addEventListener("load", () => {
      img.classList.add("loaded"); // Apply fade-in effect when loaded
    });

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-6", "col-md-4");
    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);
  }
});



// Wait for the DOM to be fully loaded
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
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = "☀️ Light Mode";
  }

  // Toggle function
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
