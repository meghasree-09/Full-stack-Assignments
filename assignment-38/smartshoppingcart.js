// Product Array
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000 },
    { id: 2, name: "Mobile", category: "Electronics", price: 22000 },
    { id: 3, name: "Keyboard", category: "Electronics", price: 1200 },
    { id: 4, name: "Headphones", category: "Electronics", price: 1800 },
    { id: 5, name: "Notebook", category: "Stationery", price: 80 },
    { id: 6, name: "Pen", category: "Stationery", price: 20 },
    { id: 7, name: "Marker", category: "Stationery", price: 50 },
    { id: 8, name: "Watch", category: "Accessories", price: 2500 },
    { id: 9, name: "Wallet", category: "Accessories", price: 700 },
    { id: 10, name: "Backpack", category: "Accessories", price: 1500 }
];

// DOM Elements
const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

// Display Products
function displayProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><b>ID:</b> ${product.id}</p>
            <p><b>Category:</b> ${product.category}</p>
            <p><b>Price:</b> ₹${product.price}</p>
        `;

        productContainer.appendChild(card);

    });
}

// Show all products initially
displayProducts(products);

// Search and Filter Function
function filterProducts() {

    const searchValue = searchInput.value.toLowerCase();

    const categoryValue = categorySelect.value;

    const filteredProducts = products.filter(product => {

        const matchName = product.name
            .toLowerCase()
            .includes(searchValue);

        const matchCategory =
            categoryValue === "All" ||
            product.category === categoryValue;

        return matchName && matchCategory;

    });

    displayProducts(filteredProducts);
}

// Event Listeners
searchInput.addEventListener("keyup", filterProducts);

categorySelect.addEventListener("change", filterProducts);

// ----------------------
// Task 2 - Shopping Cart
// ----------------------

// Cart Array
let cart = [];

// Add Product to Cart
function addToCart(id) {

    const product = products.find(product => product.id === id);

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    displayCart();

}

// Update displayProducts() function by adding the button

function displayProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><b>ID:</b> ${product.id}</p>
            <p><b>Category:</b> ${product.category}</p>
            <p><b>Price:</b> ₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.appendChild(card);

    });

}

// Display Cart
function displayCart() {

    const cartBody = document.getElementById("cartItems");

    cartBody.innerHTML = "";

    let totalItems = 0;

    let totalPrice = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice += item.price * item.quantity;

        cartBody.innerHTML += `

        <tr>

            <td>${item.name}</td>

            <td>₹${item.price}</td>

            <td>

                <button onclick="decreaseQty(${item.id})">-</button>

                ${item.quantity}

                <button onclick="increaseQty(${item.id})">+</button>

            </td>

            <td>₹${item.price * item.quantity}</td>

            <td>

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("totalItems").textContent = totalItems;

    document.getElementById("totalPrice").textContent = totalPrice;

}

// Increase Quantity
function increaseQty(id) {

    const item = cart.find(item => item.id === id);

    item.quantity++;

    displayCart();

}

// Decrease Quantity
function decreaseQty(id) {

    const item = cart.find(item => item.id === id);

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart = cart.filter(item => item.id !== id);

    }

    displayCart();

}

// Remove Product
function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    displayCart();

}

// ----------------------
// Task 3 - Checkout & Invoice
// ----------------------

let discount = 0;

// Apply Coupon
function applyCoupon() {

    const coupon = document.getElementById("coupon").value.toUpperCase();

    if (coupon === "SAVE10") {

        discount = 10;

        document.getElementById("couponMessage").innerHTML =
            "Coupon Applied Successfully (10% Discount)";

        document.getElementById("couponMessage").style.color = "green";

    }

    else if (coupon === "SAVE20") {

        discount = 20;

        document.getElementById("couponMessage").innerHTML =
            "Coupon Applied Successfully (20% Discount)";

        document.getElementById("couponMessage").style.color = "green";

    }

    else {

        discount = 0;

        document.getElementById("couponMessage").innerHTML =
            "Invalid Coupon Code";

        document.getElementById("couponMessage").style.color = "red";

    }

}

// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your Cart is Empty!");

        return;

    }

    const customer = document.getElementById("customerName").value;

    if (customer === "") {

        alert("Please Enter Customer Name");

        return;

    }

    generateInvoice(customer);

}

// Generate Invoice
function generateInvoice(customer) {

    let subtotal = 0;

    let productRows = "";

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

        productRows += `

        <tr>

            <td>${item.name}</td>

            <td>${item.quantity}</td>

            <td>₹${item.price}</td>

            <td>₹${item.price * item.quantity}</td>

        </tr>

        `;

    });

    const gst = subtotal * 0.18;

    const discountAmount = subtotal * discount / 100;

    const grandTotal = subtotal + gst - discountAmount;

    const invoiceNumber = Math.floor(Math.random() * 1000000);

    const date = new Date().toLocaleDateString();

    document.getElementById("invoice").innerHTML = `

        <h2>Invoice</h2>

        <p><b>Customer Name:</b> ${customer}</p>

        <p><b>Invoice Number:</b> ${invoiceNumber}</p>

        <p><b>Date:</b> ${date}</p>

        <table border="1" cellpadding="8">

            <tr>

                <th>Product</th>

                <th>Quantity</th>

                <th>Price</th>

                <th>Total</th>

            </tr>

            ${productRows}

        </table>

        <br>

        <p><b>Subtotal:</b> ₹${subtotal.toFixed(2)}</p>

        <p><b>GST (18%):</b> ₹${gst.toFixed(2)}</p>

        <p><b>Discount:</b> ₹${discountAmount.toFixed(2)}</p>

        <h3>Grand Total: ₹${grandTotal.toFixed(2)}</h3>

    `;

    alert("Checkout Successful!");

    // Clear Cart
    cart = [];

    discount = 0;

    displayCart();

    document.getElementById("customerName").value = "";

    document.getElementById("coupon").value = "";

    document.getElementById("couponMessage").innerHTML = "";

}