// services data
const services = [
    { name: "Dry Cleaning", price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYuFk8nhRSr3gxq535Wqxz_ym4YoIrHkO5g&s" },
    { name: "Leather Cleaning", price: 350, img: "https://media.istockphoto.com/id/871624816/photo/cleaning-leather-sofa-at-home.jpg?s=612x612&w=0&k=20&c=YYKGH3JfCHzITMAz94k-CVHO22pnsoKf02hREz3gKzo=" },
    { name: "Ironing", price: 100, img: "https://media.istockphoto.com/id/1410409636/vector/household-chores-the-girl-is-doing-household-chores-ironing-clothes-on-an-ironing-board.jpg?s=612x612&w=0&k=20&c=GYDx6oJ-XxZcTtpJkzcoQ_-OBeYtKh-ytCtIqFPWa9E=" },
    { name: "Wedding Dress", price: 500, img: "https://www.wikihow.com/images/thumb/b/bc/Clean-a-Wedding-Gown-Step-8-Version-3.jpg/v4-460px-Clean-a-Wedding-Gown-Step-8-Version-3.jpg" },
    { name: "Wash and Fold", price: 140, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Wq6VcEuDtyOjkac7aOuBavuZ3TXijo1FFA&s" },
    { name: "Stain Removal", price: 500, img: "https://as2.ftcdn.net/jpg/03/95/40/57/1000_F_395405729_qADVPwSOGPI0QneDmHJ2a9OTD6dSBdjr.jpg" }
];

let index = 0;
let cart = [];

// elements
const img = document.getElementById("service-img");
const nameEl = document.getElementById("service-name");
const priceEl = document.getElementById("service-price");

const skipBtn = document.getElementById("skip-btn");
const addBtn = document.getElementById("add-btn");
const cartBtn = document.getElementById("cart-btn");

const cartBox = document.getElementById("cart-items");
const totalEl = document.getElementById("total-amount");

const bookBtn = document.getElementById("book-btn");
const msg = document.getElementById("success-message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

// load first service
function showService() {
    let s = services[index];
    img.src = s.img;
    nameEl.textContent = s.name;
    priceEl.textContent = "₹ " + s.price;
}

showService();

// next service
skipBtn.addEventListener("click", function () {
    index = index + 1;
    if (index >= services.length) {
        index = 0;
    }
    showService();
});

// add to cart (used by both buttons)
function addToCart() {
    let s = services[index];

    let found = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === s.name) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("Already added");
        return;
    }

    cart.push(s);
    renderCart();
    updateTotal();

    bookBtn.disabled = false;

    index++;
    if (index >= services.length) {
        index = 0;
    }
    showService();
}

addBtn.addEventListener("click", addToCart);
cartBtn.addEventListener("click", addToCart);

// render cart
function renderCart() {
    cartBox.innerHTML = "";

    if (cart.length === 0) {
        cartBox.innerHTML = "<p class='empty'>No Items Added</p>";
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        let row = document.createElement("div");
        row.className = "cart-row";

        row.innerHTML =
            "<span class='col-1'>" + (i + 1) + "</span>" +
            "<span class='col-2'>" + cart[i].name + "</span>" +
            "<span class='col-3'>₹ " + cart[i].price + "</span>";

        cartBox.appendChild(row);
    }
}

// update total
function updateTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    totalEl.textContent = "₹ " + total.toFixed(2);
}

// booking
bookBtn.addEventListener("click", function () {
    let n = nameInput.value.trim();
    let e = emailInput.value.trim();
    let p = passInput.value.trim();

    if (n === "" || e === "" || p === "") {
        alert("Fill all fields");
        return;
    }

    msg.classList.remove("hidden");

    msg.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    bookBtn.disabled = true;

    setTimeout(function () {
        reset();
    }, 4000);
});

// reset
function reset() {
    cart = [];
    index = 0;

    showService();
    updateTotal();

    cartBox.innerHTML = "<p class='empty'>No Items Added</p>";

    msg.classList.add("hidden");

    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";

    bookBtn.disabled = true;
}