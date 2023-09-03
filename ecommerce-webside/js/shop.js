import { products } from "./products.js";
import { openMenu, closeMenu } from "./hamburger.js";
import { createHTML } from "./create.js";

const allProductsContainer = document.querySelector("#all-products-container-js");
const mainImg = document.getElementById('mainImg')
const smallImg = document.querySelector('.small-img-col')



const showAllProducts = () => {
	products.forEach((product) => {
		createHTML(product, allProductsContainer);
	});
};

window.addEventListener("DOMContentLoaded", () => {
	showAllProducts();
});
