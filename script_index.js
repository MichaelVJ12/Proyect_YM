// tu array completo de productos...
const products = [{ 
    name: "AMD Ryzen 5 5600G",
    image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
    category: "CPU",
    price: "609.000",
    brand: "AMD",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Gigabyte B550m Ds3h",
    image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
    category: "Motherboard",
    price: "487.207",
    brand: "Gigabyte",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Intel Core i5-11600K",
    image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
    category: "CPU",
    price: "449.000",
    brand: "Intel",
    gama: "Alta",
    specifications: "Especificaciones del producto"
},
{ 
    name: "ASRock B450M Steel Legend",
    image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
    category: "Motherboard",
    price: "349.000",
    brand: "ASRock",
    gama: "Baja",
    specifications: "Especificaciones del producto"
},
// SSD
{ 
    name: "Samsung 970 EVO Plus 1TB",
    image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
    category: "StorageSSD",
    price: "129.000",
    brand: "Samsung",
    gama: "Alta",
    specifications: "Especificaciones del producto"
},
{ 
    name: "WD Black SN750 2TB",
    image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
    category: "StorageSSD",
    price: "249.000",
    brand: "WD",
    gama: "Alta",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Crucial P5 1TB",
    image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
    category: "StorageSSD",
    price: "109.000",
    brand: "Crucial",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
// HDD
{ 
    name: "WD Caviar Blue 2TB",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
    category: "StorageHDD",
    price: "139.000",
    brand: "Western Digital",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Seagate BarraCuda 3TB",
    image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
    category: "StorageHDD",
    price: "199.000",
    brand: "Seagate",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
// Disipadores de calor
{ 
    name: "Noctua NH-U14S TR4-SP3",
    image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
    category: "Cold",
    price: "249.000",
    brand: "Noctua",
    gama: "Alta",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Cooler Master Hyper 212 RGB Black-E",
    image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
    category: "Cold",
    price: "149.000",
    brand: "Cooler Master",
    gama: "Media",
    specifications: "Especificaciones del producto"
},
{ 
    name: "Cooler Master Hyper 212 RGB Black-E",
    image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
    category: "Cold",
    price: "149.000",
    brand: "Cooler Master",
    gama: "Media",
    specifications: "Especificaciones del producto"
}];

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