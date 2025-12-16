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

  if (slides[index]) slides[index].classList.add("active");
  if (dots[index]) dots[index].classList.add("active");
}

// Flechas
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
}

// Puntos
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto rotación
if (slides.length > 0) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
}


/* =========================
   BLOG LIKES (1 POR DISPOSITIVO)
========================= */
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
  const postId = btn.dataset.post;
  const countSpan = btn.querySelector(".like-count");

  if (!postId || !countSpan) return;

  const likeKey = `likes-${postId}`;
  const likedKey = `liked-${postId}`;

  // Cargar likes guardados
  let likes = localStorage.getItem(likeKey);
  likes = likes ? parseInt(likes) : 0;
  countSpan.textContent = likes;

  // Si ya dio like, bloquear
  if (localStorage.getItem(likedKey)) {
    btn.classList.add("liked");
    btn.style.cursor = "not-allowed";
  }

  btn.addEventListener("click", () => {
    if (localStorage.getItem(likedKey)) return;

    likes++;
    countSpan.textContent = likes;

    localStorage.setItem(likeKey, likes);
    localStorage.setItem(likedKey, "true");

    btn.classList.add("liked");
    btn.style.cursor = "not-allowed";
  });
});


/* =========================
   GOOGLE MAPS
========================= */
function initMap() {
  const centro = { lat: 45.3025, lng: -74.1553 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: centro,
  });
}
