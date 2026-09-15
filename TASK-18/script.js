// Select elements
const boxes = document.querySelectorAll(".box"); // Finds ALL elements matching a CSS selector i.e. with class "box"
const greeting = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");

// Add click event to each box
boxes.forEach(function(box) {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color"); // getAttribute() method - Get the value of a specific attribute from HTML
        box.style.backgroundColor = color; // changing box background-color corresponding to its custom attribute value
    });
});

// Button click event
button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter your name"); // display a popup message box if name is empty
        return; // break the flow and stop/exit the function immediately.
    }

    greeting.innerText = "Hello, " + name; // appending name input by the user
});