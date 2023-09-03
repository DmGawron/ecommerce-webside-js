
export  const createHTML = (product,container) => {
	const html = `
        
    <div class="pro" onclick="window.location.href='sproduct.html'">
    <img src="${product.img}" alt="">
    <div class="des">
    <span>${product.brand}</span>
    <h5>${product.productName}</h5>
    <div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    </div>
    <h4>$${product.price}</h4>
    </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            `;

            container.insertAdjacentHTML("beforeend", html);
};