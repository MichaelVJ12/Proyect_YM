// tu array completo de productos...
const product = { name: "", image: "", category: "", price: "", description: "" };
let products = [];
for (let i = 0; i < 12; i++) {
    products.push(product);
};

// inicializa el carrusel
let slideIndex = 0;
let slideInterval;

// decide cuántos productos entran por slide
function getItemsPerSlide() {
  const w = window.innerWidth;
  if (w >= 1024) return 4;
  if (w >= 768)  return 3;
  return 2;
}

// trocea el array en grupos de tamaño fijo
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// reconstruye los slides según el ancho actual
function renderCarousel() {
  const perSlide = getItemsPerSlide();
  let slides = chunkArray(products, perSlide);

  const inner = document.getElementById('carrusel-inner');
  inner.innerHTML = slides.map((slide) =>
    `<div class="carrusel-item">` +
      slide.map(() =>
        `<div class="product">
           <div class="product-img"></div>
           <div class="product-info">
             <h4>Producto</h4>
             <p>$99.999</p>
           </div>
         </div>`
      ).join('') +
    `</div>`
  ).join('');

  const indicatorsContainer = document.getElementById('carrusel-indicators');
  // Genera un botón por cada slide
  indicatorsContainer.innerHTML = slides.map((_, idx) =>
    `<button class="indicator ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></button>`
  ).join('');

  // reinicia al primer slide
  slideIndex = 0;
  inner.style.transform = 'translateX(0)';
}

// Salta a la slide 'idx' y actualiza el indicador
function goToSlide(idx) {
  const slides = document.querySelectorAll('.carrusel-item');
  // Lógica de límite igual que moveSlide
  slideIndex = idx;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  // Mueve el carrusel
  document.getElementById('carrusel-inner').style.transform = `translateX(${-100 * slideIndex}%)`;
  // Reinicia autoplay
  clearInterval(slideInterval);
  slideInterval = setInterval(() => moveSlide(1), 5000);
  // Actualiza indicador activo
  actualizarIndicadores();
}

function actualizarIndicadores() {
  const btns = document.querySelectorAll('#carrusel-indicators .indicator');
  btns.forEach((btn, i) => {
    btn.classList.toggle('active', i === slideIndex);
  });
}

// mueve slide (manual y autoplay)
function moveSlide(n) {
  const slides = document.querySelectorAll('.carrusel-item');
  slideIndex += n;

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  const offset = slideIndex * -100;
  document.getElementById('carrusel-inner').style.transform = `translateX(${offset}%)`;

  // reinicia el autoplay tras interacción
  clearInterval(slideInterval);
  slideInterval = setInterval(() => moveSlide(1), 5000);
  
  actualizarIndicadores();
}

// autoplay inicial
slideInterval = setInterval(() => moveSlide(1), 5000);

// renderizado inicial y al redimensionar
window.addEventListener('load',   renderCarousel);
window.addEventListener('resize', renderCarousel);

window.addEventListener("DOMContentLoaded", function () {
  let prev_button1 = document.getElementById("carousel-prev");
  let next_button1 = document.getElementById("carousel-next");
  let prev_button2 = document.getElementById("carousel-prev-control");
  let next_button2 = document.getElementById("carousel-next-control");

  prev_button1.addEventListener("click", function () {
    moveSlide(-1);
  });
  next_button1.addEventListener("click", function () {
    moveSlide(1);
  });
  prev_button2.addEventListener("click", function () {
    moveSlide(-1);
  });
  next_button2.addEventListener("click", function () {
    moveSlide(1);
  });
});