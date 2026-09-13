# 🧺 Laundry Mart — Responsive Landing Page

<div align="center">

### Responsive Web Design with CSS Media Queries

**Developed by Tanmay Shakya**

[HTML5](#) • [CSS3](#) • [Media Queries](#) • [Responsive Design](#)

</div>

---

## 📌 Overview

**Laundry Mart** is a responsive laundry-service landing page created to demonstrate modern front-end layout techniques using **HTML5 and CSS3**.

The project is designed around a simple service-booking landing page and focuses particularly on **responsive behavior across desktop and mobile screen sizes**. A CSS-only mobile navigation interaction is implemented without JavaScript.

The interface includes a navigation bar, service-focused hero section, responsive image, call-to-action button, and a mobile hamburger menu.

---

## 🎯 Project Objective

The main objective of this project is to understand how a webpage can adapt its structure and sizing according to the user's device.

### Key learning objectives

- Understand CSS Media Queries
- Build responsive layouts
- Work with desktop and mobile breakpoints
- Use Flexbox for responsive navigation
- Create mobile-friendly typography
- Resize images according to viewport width
- Implement a CSS-only mobile menu interaction
- Maintain a clean and simple UI structure

---

## ✨ Features

### 🖥️ Desktop Layout

- Horizontal navigation bar
- Logo section
- Navigation links
- Username badge
- Two-column hero layout
- Service description
- Call-to-action button
- Responsive laundry image

### 📱 Mobile Layout

At screen widths of **425px or below**, the page automatically changes its layout.

- Desktop navigation links are hidden
- Hamburger menu becomes visible
- Mobile navigation opens using CSS focus behavior
- Hero content changes from two columns to one column
- Heading sizes are reduced
- Paragraph width becomes fluid
- Image scales to fit the screen
- Button dimensions are adjusted for mobile usability

---

## 📐 Responsive Breakpoint

The main responsive breakpoint is:

```css
@media (max-width: 425px) {
    /* Mobile styles */
}
```

This breakpoint modifies the navigation, hero section, typography, button, and image for smaller devices.

---

## 🧠 How the Media Query Works

### Navigation

Desktop navigation uses the regular horizontal layout.

On mobile:

```css
.desktop-links {
    display: none;
}
```

The desktop links are hidden to provide space for the mobile navigation.

The hamburger control is enabled with:

```css
.mobile-menu-control {
    display: block;
}
```

---

### CSS-Only Mobile Menu

One of the notable features of this project is that the mobile menu does **not require JavaScript**.

The menu is displayed when the hamburger button receives focus:

```css
.hamburger:focus + .mobile-menu,
.mobile-menu-control:focus-within .mobile-menu {
    display: block;
}
```

This demonstrates how CSS focus states can be used to create simple interactions without JavaScript.

---

### Responsive Hero Section

The desktop hero uses two columns:

```css
.left {
    float: left;
    width: 50%;
}

.right {
    float: right;
    width: 50%;
}
```

On mobile devices, both sections become full-width:

```css
.left {
    float: none;
    width: 100%;
}

.right {
    float: none;
    width: 100%;
}
```

This changes the design from a horizontal desktop layout into a vertical mobile layout.

---

### Responsive Typography

The desktop heading uses a larger font size:

```css
.left h1 {
    font-size: 36px;
}
```

On mobile:

```css
.left h1 {
    font-size: 24px;
}
```

This prevents oversized text from consuming too much screen space.

---

### Responsive Image

The desktop image uses:

```css
.right img {
    width: 70%;
}
```

On mobile:

```css
.right img {
    width: 100%;
    max-width: 290px;
}
```

This keeps the image visually balanced while preventing it from becoming unnecessarily large.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and content |
| **CSS3** | Styling and layout |
| **CSS Media Queries** | Responsive behavior |
| **CSS Focus States** | Mobile menu interaction |
| **Flexbox** | Responsive navigation alignment |

---

## 📂 Project Structure

```text
Task-8/
│
├── index.html
├── style.css
├── LAUNDRYLOGO.jfif
└── README.md
```

### File Description

| File | Description |
|---|---|
| `index.html` | Main webpage structure |
| `style.css` | Complete styling and responsive rules |
| `LAUNDRYLOGO.jfif` | Laundry-related project image |
| `README.md` | Project documentation |

---

## 🚀 Getting Started

### 1. Download or Clone the Repository

```bash
git clone https://github.com/your-username/laundry-mart-responsive.git
```

### 2. Open the Project

```bash
cd laundry-mart-responsive
```

### 3. Run the Website

Open:

```text
index.html
```

in a modern web browser.

---

## 💻 Recommended Development Setup

For development, **Visual Studio Code** with the **Live Server** extension can be used.

### Steps

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.

---

## 🧪 Responsive Testing

The webpage should be tested at different viewport sizes.

### Desktop

```text
> 425px
```

Expected behavior:

- Desktop navigation visible
- Two-column hero section
- Larger typography
- Image displayed beside the content

### Mobile

```text
≤ 425px
```

Expected behavior:

- Hamburger navigation visible
- Desktop links hidden
- Hero becomes vertically stacked
- Smaller typography
- Responsive image
- Mobile-friendly button

---

## 📱 Suggested Test Devices

| Device Type | Approx. Width |
|---|---:|
| Desktop | 1366px+ |
| Laptop | 1024px–1365px |
| Tablet | 768px |
| Mobile | 425px |
| Small Mobile | 375px |
| Compact Mobile | 320px |

---

## 🎨 UI Sections

### 1. Navigation Bar

Contains:

- Logo
- Home
- Services
- About Us
- Contact Us
- Username
- Mobile hamburger menu

### 2. Hero Section

Contains:

- Main heading
- Laundry service tagline
- Service description
- Booking CTA
- Laundry image

### 3. Call-to-Action

The primary action is:

> **Book a service today**

This provides a clear next step for users interested in the laundry service.

---

## 🔮 Future Improvements

The current project focuses on responsive front-end implementation. It can be expanded into a complete laundry-service application.

### Front-End Improvements

- Add additional responsive breakpoints
- Improve accessibility
- Add hover and transition effects
- Add service cards
- Add pricing section
- Add customer testimonials
- Add footer section
- Improve mobile navigation animation

### Functional Improvements

- JavaScript form validation
- Service booking system
- Pickup scheduling
- User authentication
- Order tracking
- Customer dashboard
- Payment integration
- Backend/database integration

---

## ⚠️ Current Limitations

This is currently a **front-end demonstration project**.

The navigation links and booking button are placeholder links and do not connect to a backend service.

There is also no real authentication, booking, payment, or database functionality implemented.

---

## 📚 Learning Outcomes

After completing this project, the developer gains practical experience with:

- Semantic HTML structure
- CSS layout techniques
- Responsive design
- Media queries
- Mobile-first considerations
- Responsive typography
- Responsive images
- CSS focus states
- UI organization
- Front-end project documentation

---

## 🤝 Contributing

Contributions and improvements are welcome.

### Basic workflow

```bash
git checkout -b feature/new-feature
```

Make your changes, test the responsive behavior, and submit a pull request.

---

## 📄 License

This project is created for **educational and portfolio purposes**.

You are free to modify and improve the project for learning purposes.

---

## 👨‍💻 Author

### Tanmay Shakya

**Front-End Developer | Web Development Learner | UI/UX Enthusiast**

Focused on learning modern web development and building practical, responsive web interfaces.

---

<div align="center">

## ⭐ Support the Project

If you found this project useful for learning responsive web development, consider giving the repository a ⭐.

### Built with HTML & CSS by **Tanmay Shakya**

</div>
