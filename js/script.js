// Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbarNav = document.querySelector(".navbar-nav");

// Toggle Navbar on Click
menuToggle.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  console.log("Menu clicked!");
});

// Klik di luar sidebar untuk menutup navbar
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scroll Animation for About Us Cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".about-cards .card");
hiddenElements.forEach((el) => observer.observe(el));

// Hover Effect for Cards
const cards = document.querySelectorAll(".about-cards .card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// About Us
document.getElementById("scroll-left").addEventListener("click", () => {
  document
    .querySelector(".about-cards")
    .scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("scroll-right").addEventListener("click", () => {
  document
    .querySelector(".about-cards")
    .scrollBy({ left: 300, behavior: "smooth" });
});

const sliderContainer = document.querySelector(".slider-container");
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");

sliderLeft.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: -300, behavior: "smooth" });
});

sliderRight.addEventListener("click", () => {
  sliderContainer.scrollBy({ left: 300, behavior: "smooth" });
});

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

// Event Listener for Image Click
document.querySelectorAll(".slider-images img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex"; // Tampilkan lightbox
    lightboxImg.src = img.src; // Ganti src gambar lightbox dengan gambar yang diklik
    lightboxImg.alt = img.alt; // Ganti alt gambar lightbox
  });
});

// Event Listener for Lightbox Close
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none"; // Sembunyikan lightbox
});

// Close Lightbox on Background Click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Lightbox Elements
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

// Collect all slider images
const sliderImages = document.querySelectorAll(".slider-images img");
let currentImageIndex = 0;

// Function to open lightbox
const openLightbox = (index) => {
  currentImageIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = sliderImages[currentImageIndex].src;
  lightboxImg.alt = sliderImages[currentImageIndex].alt;
};

// Function to close lightbox
const closeLightbox = () => {
  lightbox.style.display = "none";
};

// Function to show the next image
const showNextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  lightboxImg.src = sliderImages[currentImageIndex].src;
  lightboxImg.alt = sliderImages[currentImageIndex].alt;
};

// Function to show the previous image
const showPrevImage = () => {
  currentImageIndex =
    (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  lightboxImg.src = sliderImages[currentImageIndex].src;
  lightboxImg.alt = sliderImages[currentImageIndex].alt;
};

// Add event listeners to slider images
sliderImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Add event listeners for lightbox controls
lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPrevImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Add event listeners to slider images
sliderImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

// Add event listeners for lightbox controls
lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPrevImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Contact Form Submission Alert
const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon. 😊");
  form.reset();
});

// Ambil elemen-elemen input dan tombol
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");

// Fungsi untuk mengecek apakah semua input sudah terisi
function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Aktifkan tombol hanya jika semua input terisi
  if (nameValue && emailValue && messageValue) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Tambahkan event listener untuk setiap input
nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
messageInput.addEventListener("input", checkInputs);

// slide manual background
// Ambil elemen-elemen penting
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

let currentIndex = 0; // Indeks slide aktif
let direction = 1; // 1 untuk maju, -1 untuk mundur

// Fungsi untuk memperbarui posisi slide
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk menjalankan slide otomatis
function autoSlide() {
  // Perbarui indeks berdasarkan arah
  currentIndex += direction;

  // Jika mencapai slide terakhir, ubah arah ke mundur
  if (currentIndex === totalSlides - 1) {
    direction = -1;
  }

  // Jika mencapai slide pertama, ubah arah ke maju
  if (currentIndex === 0) {
    direction = 1;
  }

  // Perbarui posisi slide
  updateSlide();
}

// Mengatur interval waktu 15 detik untuk slide otomatis
setInterval(autoSlide, 15000);
