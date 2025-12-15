const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    alert("Producto agregado al carrito 💖");
  });
});


//MApa//////////////////
function initMap() {
  // CENTRO GENERAL DEL MAPA
  const centro = { lat: 45.3025, lng: -74.1553 };

  // CREAR MAPA
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: centro,
  });
}