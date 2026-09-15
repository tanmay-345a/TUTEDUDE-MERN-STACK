// Step 1: Student Data
const students = [
    { name: "Salmaan Ahmed", marks: 38, class: "3rd", address: "India" },
    { name: "Riya Sharma", marks: 85, class: "10th", address: "Delhi" },
    { name: "Rohan Patel", marks: 70, class: "12th", address: "Mumbai" },
    { name: "Priya Singh", marks: 95, class: "8th", address: "Bangalore" },
    { name: "Ankit Gupta", marks: 60, class: "9th", address: "Kolkata" },
    { name: "Neha Verma", marks: 80, class: "11th", address: "Chennai" },
    { name: "Manoj Kumar", marks: 75, class: "10th", address: "Hyderabad" },
    { name: "Pooja Mishra", marks: 88, class: "12th", address: "Pune" },
    { name: "Rajesh Singhania", marks: 92, class: "9th", address: "Jaipur" },
    { name: "Sunita Jain", marks: 78, class: "11th", address: "Ahmedabad" },
    { name: "Jennifer Smith", marks: 87, class: "10th", address: "USA" },
    { name: "Michael Johnson", marks: 75, class: "9th", address: "UK" }
];

// Get HTML elements
const container = document.getElementById("cardContainer");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

// Step 2: Render Students using map()
function renderStudents(studentList) {
    container.innerHTML = studentList.map((student) => {
        return `
            <div class="card">
                <p>Student Name: <strong>${student.name}</strong></p>
                <p>Marks: <strong>${student.marks}%</strong></p>
                <p>Class: <strong>${student.class}</strong></p>
                <p>Address: <strong>${student.address}</strong></p>
            </div>
        `;
    }).join("");
    // above join("") is used to converts return type into a string, bcz map() returns an array. 
    // Without join(""), map returned data will be display like array with ',' seprators which
    // will break the UI.
}

// Initial display
renderStudents(students);

// Step 3: Search using filter()
function handleSearch() {
    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().startsWith(searchValue)
    );

    renderStudents(filteredStudents);
}

// 1. Search on button click
searchBtn.addEventListener("click", handleSearch);

// 2. Search on Enter key
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleSearch();
    }
});

// Reset when input becomes empty
searchInput.addEventListener("input", function () {
    const value = this.value.trim();

    if (value === "") {
        renderStudents(students);
    }
});