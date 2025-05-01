// Script para la tienda de productos
// Este script maneja la visualización de productos, la paginación y la interacción del usuario en la tienda.
const product = { name: "", image: "", category: "", price: "", description: "" };
let products = [];
for (let i = 0; i < 100; i++) {
    products.push(product);
};

const productsPerPage = 12;
const totalProducts = products.length;
let currentPage = 1;

function displayProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    displayedProducts.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div class="product-img"></div>
            <div class="product-info">
            <h4>Producto</h3>
            <p>$99.999</p>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

//paginación de productos 

function displayPagination() {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const maxButtons = 5; 
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (startPage > 1) {
        const prevButton = createButton('❮', currentPage - 1);
        paginationContainer.appendChild(prevButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = createButton(i.toString(), i);
        paginationContainer.appendChild(button);
    }

    if (endPage < totalPages) {
        const nextButton = createButton('❯', currentPage + 1);
        paginationContainer.appendChild(nextButton);
    }
}

function createButton(text, page) {
    const button = document.createElement('button');
    if (text == '❮') {
        button.classList.add('prev');
    }else if (text == '❯') {
        button.classList.add('next');
    }else{
        button.textContent = text;
    }
    button.classList.add('pagination-button');
    if (page === currentPage) {
        button.classList.add('active');
    }
    button.addEventListener('click', () => {
        currentPage = page;
        displayProducts(currentPage);
        displayPagination();
    });
    return button;
}

displayProducts(currentPage);
displayPagination();

function goHeader() {
    var options = document.getElementById('store-options');
    encabezado.scrollIntoView({ behavior: 'smooth' });
}