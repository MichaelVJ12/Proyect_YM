window.addEventListener("DOMContentLoaded", function () {

// Esta sección contiene los scripts del encabezado.
let bag = document.getElementById("bag-slap");
let favorite = document.getElementById("favorite-slap");
let search = document.getElementById("search-slap");
let login = document.getElementById("login-slap");
let burger = document.getElementById("nav-slap");
let filter = document.getElementById("filter-slap");
let bag_button = document.getElementById("bag-button");
let favorite_button = document.getElementById("favorite-button");
let search_button = document.getElementById("search-button");
let login_button = document.getElementById("login-button");
let burger_button = document.getElementById("burger-button");
let filter_button = document.getElementById("filter-button");
let blur = document.getElementById("blur");
let exit_bag = document.getElementById("exit-bag");
let exit_favorite = document.getElementById("exit-favorite");
let exit_search = document.getElementById("exit-search");
let exit_login = document.getElementById("exit-login");
let exit_burger = document.getElementById("exit-nav");
let exit_filter = document.getElementById("exit-filter");

// Esta sección contiene los scripts del encabezado.
function mostrarOcultarBlur(element, button) {
    element.classList.toggle("show");
    button.classList.toggle("disabled");
    blur.classList.toggle("show");
    if (element == document.getElementById("login-slap")) loginZIndex(element);
}

function mostrarOcultar(mostrar, button1, ocultar, button2) {
    ocultar.classList.remove("show");
    button1.classList.add("disabled");
    mostrar.classList.add("show");
    if (mostrar == document.getElementById("login-slap")) loginZIndex(mostrar);
    button2.classList.remove("disabled");
}

function loginZIndex(element) {
    if (element.classList.contains("show")) {
        element.style.zIndex = 5;
    } else {
        setTimeout(() => element.style.zIndex = -1, 300);
    }
};

function mostrarElemento(action) {
    switch (action) {
        case 0:
            if (favorite.classList.contains("show")) {
                mostrarOcultar(login, login_button, favorite, favorite_button);
            } else if (search.classList.contains("show")) {
                mostrarOcultar(login, login_button, search, search_button);
            } else if (bag.classList.contains("show")) {
                mostrarOcultar(login, login_button, bag, bag_button);
            } else if (burger.classList.contains("show")) {
                mostrarOcultar(login, login_button, burger, burger_button);
            } else if (filter?.classList.contains("show")) {
                mostrarOcultar(login, login_button, filter, filter_button);
            } else {
                mostrarOcultarBlur(login, login_button);
            }
            break;
        case 1:
            if (favorite.classList.contains("show")) {
                mostrarOcultar(bag, bag_button, favorite, favorite_button);
            } else if (search.classList.contains("show")) {
                mostrarOcultar(bag, bag_button, search, search_button);
            } else if (burger.classList.contains("show")) {
                mostrarOcultar(bag, bag_button, burger, burger_button);
            } else if (filter?.classList.contains("show")) {
                mostrarOcultar(bag, bag_button, filter, filter_button);
            } else {
                mostrarOcultarBlur(bag, bag_button);
            }
            break;
        case 2:
            if (bag.classList.contains("show")) {
                mostrarOcultar(favorite, favorite_button, bag, bag_button);
            } else if (search.classList.contains("show")) {
                mostrarOcultar(favorite, favorite_button, search, search_button);
            } else if (burger.classList.contains("show")) {
                mostrarOcultar(favorite, favorite_button, burger, burger_button);
            } else if (filter?.classList.contains("show")) {
                mostrarOcultar(favorite, favorite_button, filter, filter_button);
            } else {
                mostrarOcultarBlur(favorite, favorite_button);
            }
            break;
        case 3:
            if (favorite.classList.contains("show")) {
                mostrarOcultar(search, search_button, favorite, favorite_button);
            } else if (bag.classList.contains("show")) {
                mostrarOcultar(search, search_button, bag, bag_button);
            } else if (burger.classList.contains("show")) {
                mostrarOcultar(search, search_button, burger, burger_button);
            } else if (filter?.classList.contains("show")) {
                mostrarOcultar(search, search_button, filter, filter_button);
            } else {
                mostrarOcultarBlur(search, search_button);
            }
            break;
        case 4:
            if (favorite.classList.contains("show")) {
                mostrarOcultar(burger, burger_button, favorite, favorite_button);
            } else if (search.classList.contains("show")) {
                mostrarOcultar(burger, burger_button, search, search_button);
            } else if (bag.classList.contains("show")) {
                mostrarOcultar(burger, burger_button, bag, bag_button);
            } else if (filter?.classList.contains("show")) {
                mostrarOcultar(burger, burger_button, filter, filter_button);
            } else {
                mostrarOcultarBlur(burger, burger_button);
            }
            break;
        case 5:
            if (filter && filter_button) {
                mostrarOcultarBlur(filter, filter_button);
            }
            break;
    }
}

bag_button.addEventListener("click", () => mostrarElemento(1));
favorite_button.addEventListener("click", () => mostrarElemento(2));
search_button.addEventListener("click", () => mostrarElemento(3));
login_button.addEventListener("click", () => mostrarElemento(0));
burger_button.addEventListener("click", () => mostrarElemento(4));
if (filter_button)   filter_button.addEventListener("click", () => mostrarElemento(5));

exit_bag.addEventListener("click", () => mostrarElemento(1));
exit_favorite.addEventListener("click", () => mostrarElemento(2));
exit_search.addEventListener("click", () => mostrarElemento(3));
exit_login.addEventListener("click", () => mostrarElemento(0));
exit_burger.addEventListener("click", () => mostrarElemento(4));
if (exit_filter)   exit_filter.addEventListener("click", () => mostrarElemento(5));
});