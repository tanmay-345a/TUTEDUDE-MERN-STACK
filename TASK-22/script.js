emailjs.init("YOUR_PUBLIC_KEY");

let buttons = document.querySelectorAll(".add-btn");
let cartItems = document.getElementById("cart-items");
let totalText = document.getElementById("total");
let bookBtn = document.getElementById("book-btn");
let heroBtn = document.getElementById("hero-btn");
let subscribeBtn = document.getElementById("subscribe-btn");
let cart = [];
let total = 0;

heroBtn.addEventListener("click", function () {
    document.getElementById("booking-section").scrollIntoView({
        behavior: "smooth"
    });
});

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let id = button.dataset.id;
        let name = button.dataset.name;
        let price = Number(button.dataset.price);
        let found = false;
        let index = -1;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                found = true;
                index = i;
            }
        }

        if (found == true) {
            cart.splice(index, 1);
            button.innerText = "Add Item";
            button.style.backgroundColor = "blue";
        }
        else {
            let item = {
                id: id, name: name, price: price
            };
            cart.push(item);
            button.innerText = "Remove Item";
            button.style.backgroundColor = "red";
        }

        localStorage.setItem("laundryCart", JSON.stringify(cart));
        showCart();
    });
});

function showCart() {
    cartItems.innerHTML = "";
    total = 0;

    if (cart.length == 0) {
        cartItems.innerHTML = "<p>No items added</p>";
        totalText.innerText = 0;
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        let p = document.createElement("p");
        p.innerText =
            cart[i].name + " - ₹" + cart[i].price;
        cartItems.appendChild(p);
        total = total + cart[i].price;
    }
    totalText.innerText = total;
}

window.addEventListener("load", function () {
    let savedData = localStorage.getItem("laundryCart");
    if (savedData) {
        cart = JSON.parse(savedData);
        showCart();

        for (let i = 0; i < buttons.length; i++) {
            let btnId = buttons[i].dataset.id;

            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == btnId) {
                    buttons[i].innerText = "Remove Item";
                    buttons[i].style.backgroundColor = "red";
                }
            }
        }
    }
});

bookBtn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message");

    if (name == "" || email == "" || phone == "") {
        alert("Please fill all fields");
        return;
    }

    if (email.includes("@") == false) {
        alert("Enter valid email");
        return;
    }

    if (phone.length != 10) {
        alert("Enter 10 digit phone number");
        return;
    }

    if (cart.length == 0) {
        alert("Please add at least one service");
        return;
    }

    emailjs.send(
        "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",
        {
            user_name: name,
            user_email: email,
            user_phone: phone,
            total_amount: total
        }
    )
        .then(function () {
            message.innerText =
                "Thank you for booking the service. We will get back to you soon!";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            cart = [];
            total = 0;
            localStorage.removeItem("laundryCart");

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].innerText = "Add Item";
                buttons[i].style.backgroundColor = "blue";
            }

            showCart();
        })
        .catch(function (error) {
            console.log(error);
        });
});

subscribeBtn.addEventListener("click", function () {
    let userName = document.getElementById("newsletter-name").value;
    let userEmail = document.getElementById("newsletter-email").value;

    if (userName == "" || userEmail == "") {
        alert("Please fill newsletter form");
        return;
    }
    alert("Subscribed Successfully");
    document.getElementById("newsletter-name").value = "";
    document.getElementById("newsletter-email").value = "";
});