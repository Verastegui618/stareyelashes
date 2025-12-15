/* =========================
   BOTONES - CARRITO
========================= */
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    alert("Producto agregado al carrito 💖");
  });
});

/* =========================
   SLIDER / CAROUSEL
========================= */
let currentIndex = 0;

const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Flechas
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Puntos
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto rotación
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

/* =========================
   GOOGLE MAPS
========================= */
function initMap() {
  // CENTRO GENERAL DEL MAPA (Ontario - cerca Toronto)
  const centro = { lat: 45.3025, lng: -74.1553 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: centro,
  });
}
