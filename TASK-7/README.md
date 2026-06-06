# 📱 Responsive Landing Page using Media Queries

<div align="center">

# Task 7 – Responsive Web Design

### Developed by Tanmay Shakya

HTML5 • CSS3 • Media Queries • Responsive Design

</div>

---

## 📌 Project Overview

This project demonstrates the implementation of **Responsive Web Design** using **CSS Media Queries**. The webpage automatically adapts its layout, navigation, text, and images according to different screen sizes, providing an optimized user experience across desktop, tablet, and mobile devices.

The project contains a responsive landing page with a navigation bar, hero section, call-to-action button, and image section.

---

## 🎯 Objective

The primary objective of this project is to learn and implement:

* Responsive Web Design
* CSS Media Queries
* Mobile-Friendly Layouts
* Flexible Content Positioning
* Adaptive Navigation Systems
* Modern Front-End Development Techniques

---

## 🛠️ Technologies Used

| Technology    | Purpose                  |
| ------------- | ------------------------ |
| HTML5         | Page Structure           |
| CSS3          | Styling                  |
| Media Queries | Responsive Layout        |
| Flexbox       | Mobile Layout Management |

---

## 📂 Project Structure

```bash
Task-7/
│
├── index.html
├── style.css
├── LAUNDRYLOGO.jfif
└── README.md
```

---

## ✨ Features

### Desktop View

* Two-column layout
* Navigation bar with links
* Hero content section
* Image display section
* Call-to-action button

### Mobile View

* Responsive layout using Media Queries
* Hero section changes to vertical layout
* Navigation links hidden for better usability
* Image automatically resizes
* Content becomes easier to read on small screens

---

## 📱 Media Query Implementation

The project uses the following breakpoint:

```css
@media (max-width: 425px)
```

### Changes Applied on Mobile Devices

#### Hero Section

```css
.hero{
    display: flex;
    flex-direction: column;
}
```

Converts the desktop horizontal layout into a vertical mobile layout.

---

#### Navigation Bar

```css
nav{
    display: flex;
    justify-content: center;
}
```

Centers the navigation area on smaller screens.

---

#### Navigation Links

```css
nav a{
    visibility: hidden;
}
```

Hides navigation links to reduce clutter on mobile devices.

---

#### Text Content

```css
.left p{
    width: 100%;
}
```

Makes paragraph content utilize the full screen width.

---

#### Heading Section

```css
.left h1{
    width: 100%;
}
```

Improves heading responsiveness.

---

#### Image Responsiveness

```css
.right img{
    width: 100%;
}
```

Ensures images scale properly on smaller devices.

---

## 💻 How to Run

### Method 1

1. Download the project.
2. Extract the files.
3. Open `index.html`.

---

### Method 2 (VS Code)

1. Open project in Visual Studio Code.
2. Install Live Server Extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

---

## 📚 Learning Outcomes

By completing this project, you will understand:

* Responsive Web Design Principles
* CSS Media Queries
* Flexbox Layout Techniques
* Mobile-First Thinking
* Adaptive UI Development
* Cross-Device Compatibility

---

## 🚀 Future Improvements

* Add Tablet Breakpoints
* Mobile Navigation Menu (Hamburger Menu)
* CSS Grid Layout
* Smooth Animations
* Dark Mode Support
* Enhanced Accessibility Features

---

## 👨‍💻 Developer

### Tanmay Shakya

Front-End Developer | UI/UX Enthusiast | Web Development Learner

---

<div align="center">

⭐ Responsive Design Practice Project

Made with ❤️ by Tanmay Shakya

</div>
