let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartButton = document.getElementById("cart-button");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    cartButton.innerHTML = `<span>Cart (${cart.length})</span><i class="fas fa-shopping-cart"></i>`;
}

function toggleCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

function checkout() {
    if (cart.length > 0) {
        alert(`Checkout complete! Total: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
        toggleCart();
    } else {
        alert("Your cart is empty!");
    }
}
