import { products } from "./products.js";
import { openMenu, closeMenu } from "./hamburger.js";
import { createHTML } from "./create.js";
const productsContainer = document.querySelector("#featured-products-js");
const newArrivalsContainer = document.querySelector(
	"#new-arrivals-container-js"
);

// export  const createHTML = (product,container) => {
// 	const html = `

//     <div class="pro">
//     <img src="${product.img}" alt="">
//     <div class="des">
//     <span>${product.brand}</span>
//     <h5>${product.productName}</h5>
//     <div class="star">
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     <i class="fas fa-star"></i>
//     </div>
//     <h4>$${product.price}</h4>
//     </div>
//             <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
//             </div>
//             `;

//             container.insertAdjacentHTML("beforeend", html);
// };

const renderProducts = () => {
	let arr = products.filter(
		(product) => !product.hasOwnProperty("newArrivals")
	);
	console.log(arr);
	arr.forEach((product) => {
		createHTML(product, productsContainer);
	});
};

const showNewProducts = () => {
	let arr = products.filter((product) => product.hasOwnProperty("newArrivals"));
	console.log(arr);
	arr.forEach((product) => {
		createHTML(product, newArrivalsContainer);
	});
};

window.addEventListener("DOMContentLoaded", () => {
	renderProducts();
	showNewProducts();
});
