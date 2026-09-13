# 🧺 Laundry Mart — Responsive & Animated Landing Page

<div align="center">

## Task 10 — CSS Animation & Responsive Web Design

**Developed by Tanmay Shakya**

HTML5 · CSS3 · Media Queries · CSS Animation · Responsive Design

</div>

---

## 📌 Project Overview

**Laundry Mart** is a responsive laundry-service landing page created using **HTML5 and CSS3**.

This project focuses on combining two important front-end concepts:

1. **Responsive Web Design** using CSS Media Queries
2. **CSS Animations** using `@keyframes`

The page provides a clean laundry-service hero section with responsive navigation, a call-to-action button, and an animated laundry image. The animation creates a gentle orbit, rotation, and squeeze effect while remaining entirely CSS-based.

---

## 🎯 Project Objectives

The main purpose of this task is to understand and implement:

- CSS `@keyframes`
- CSS `animation` properties
- Transform-based animations
- Responsive Media Queries
- Mobile navigation
- Responsive images
- Responsive typography
- Accessibility considerations for motion
- Clean HTML/CSS project organization

---

## ✨ Key Features

### 🖥️ Responsive Desktop Layout

- Horizontal navigation bar
- Logo area
- Navigation links
- Username badge
- Two-column hero section
- Laundry image
- Service description
- Call-to-action button

### 📱 Responsive Mobile Layout

For screens **425px and below**:

- Desktop navigation links are hidden
- Hamburger menu becomes visible
- Hero content becomes vertically stacked
- Typography scales down
- Image becomes responsive
- Button is adjusted for smaller screens

### 🎬 CSS Image Animation

The laundry image uses a custom CSS animation named:

```css
laundryOrbit
```

The animation combines:

- Translation
- Rotation
- Horizontal scaling
- Vertical scaling

This creates a subtle floating/orbiting visual effect.

### ♿ Reduced Motion Support

The project respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    .right img {
        animation: none;
    }
}
```

This is an important accessibility practice because users who enable reduced-motion preferences will not see the continuous animation.

---

## 🎨 Animation Implementation

The animation is created using CSS `@keyframes`.

```css
@keyframes laundryOrbit {
    0% {
        transform: translate(0, 0) rotate(-4deg) scale(1);
    }

    50% {
        transform: translate(-8px, 5px) rotate(-5deg)
                   scale(1.05, 0.93);
    }

    100% {
        transform: translate(0, 0) rotate(-4deg) scale(1);
    }
}
```

The actual project uses multiple intermediate animation stages to make the movement smoother.

### Animation Properties

```css
animation: laundryOrbit 5s ease-in-out infinite;
```

| Property | Value | Purpose |
|---|---|---|
| Animation Name | `laundryOrbit` | Identifies the keyframe animation |
| Duration | `5s` | Animation takes five seconds |
| Timing Function | `ease-in-out` | Creates smooth acceleration/deceleration |
| Iteration Count | `infinite` | Animation repeats continuously |

---

## 🔄 Transform Effects

The animation uses the CSS `transform` property.

### Translate

```css
translate(8px, -5px)
```

Moves the image horizontally and vertically.

### Rotate

```css
rotate(5deg)
```

Tilts the image during the animation.

### Scale

```css
scale(1.04, 0.94)
```

Creates the squeeze/stretch effect.

Combining these transforms produces a more dynamic animation than simply moving the image up and down.

---

## 📱 Responsive Design

The main mobile breakpoint is:

```css
@media (max-width: 425px)
```

At this breakpoint, the desktop layout changes to a mobile-friendly layout.

### Navigation

Desktop navigation:

```css
.desktop-links {
    display: block;
}
```

Mobile navigation:

```css
.desktop-links {
    display: none;
}
```

The mobile hamburger control is enabled:

```css
.mobile-menu-control {
    display: block;
}
```

---

## ☰ CSS-Only Mobile Menu

The mobile navigation works without JavaScript.

The menu opens through the hamburger button's focus state:

```css
.hamburger:focus + .mobile-menu,
.mobile-menu-control:focus-within .mobile-menu {
    display: block;
}
```

This demonstrates how CSS focus states can be used to create basic interactive behavior without additional JavaScript.

---

## 🧱 Responsive Hero Layout

### Desktop

The hero section uses two columns:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  Laundry Content     │   Laundry Image      │
│                      │                      │
│  Heading             │                      │
│  Description         │                      │
│  CTA Button          │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

### Mobile

The sections become vertically stacked:

```text
┌─────────────────────────┐
│    Laundry Content      │
├─────────────────────────┤
│                         │
│    Laundry Image        │
│                         │
└─────────────────────────┘
```

This improves readability and usability on narrow screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Webpage structure |
| **CSS3** | Styling and layout |
| **CSS Media Queries** | Responsive design |
| **CSS Keyframes** | Animation |
| **CSS Transform** | Movement, rotation and scaling |
| **CSS Focus States** | Mobile menu interaction |

No JavaScript framework or external CSS framework is required.

---

## 📂 Project Structure

```text
Task-10/
│
├── index.html
├── style.css
├── LAUNDRYLOGO.jfif
└── README.md
```

### File Details

| File | Description |
|---|---|
| `index.html` | Main webpage structure |
| `style.css` | Complete styling, responsive rules and animation |
| `LAUNDRYLOGO.jfif` | Laundry visual used in the hero section |
| `README.md` | Project documentation |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/laundry-mart-task-10.git
```

### 2. Enter the Project Directory

```bash
cd laundry-mart-task-10
```

### 3. Open the Project

Open `index.html` in any modern browser.

---

## 💻 Run with VS Code

For a better development experience:

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.

---

## 🧪 Testing

The project should be tested at different viewport sizes.

### Desktop

Test at:

```text
1366px
1440px
1920px
```

Expected:

- Desktop navigation
- Two-column hero
- Larger typography
- Animated image

### Mobile

Test at:

```text
425px
375px
320px
```

Expected:

- Mobile navigation
- Stacked hero layout
- Responsive image
- Smaller typography
- Animation remains responsive

---

## ♿ Accessibility

The project includes a reduced-motion media query:

```css
@media (prefers-reduced-motion: reduce)
```

When the operating system/browser indicates that the user prefers reduced motion, the laundry image animation is disabled.

This helps make the interface more comfortable for users sensitive to motion.

---

## ⚡ Performance Consideration

The animated image uses:

```css
will-change: transform;
```

This informs the browser that the element is expected to change through transforms.

The animation also uses GPU-friendly transform operations such as:

- `translate()`
- `rotate()`
- `scale()`

instead of repeatedly changing layout-related properties.

---

## 🔮 Future Improvements

The current project can be expanded into a complete laundry-service website.

### UI Improvements

- Add service cards
- Add pricing section
- Add testimonials
- Add footer
- Add animated CTA interactions
- Add hover effects
- Add loading animation
- Add additional responsive breakpoints

### Functional Improvements

- Service booking system
- Pickup scheduling
- Customer login
- Order tracking
- Payment integration
- Backend/database integration
- Customer dashboard
- Admin dashboard

### Advanced Animation

- Scroll-based animations
- Intersection Observer animations
- Interactive service cards
- Micro-interactions
- Page transition effects

---

## ⚠️ Current Limitations

This project is currently a **front-end UI demonstration**.

The following features are not connected to a backend:

- Authentication
- Booking
- Payment
- Database
- Order management

Navigation and CTA links currently use placeholder URLs.

---

## 📚 Learning Outcomes

This project provides practical experience with:

- HTML page structure
- CSS styling
- Responsive design
- Media Queries
- CSS `@keyframes`
- CSS animations
- Transform functions
- Animation timing functions
- Responsive images
- CSS-only interactions
- Accessibility with reduced-motion preferences

---

## 🤝 Contributing

Contributions and improvements are welcome.

### Contribution Workflow

```bash
git checkout -b feature/new-feature
```

Make your changes, test the page across multiple screen sizes, and submit a pull request.

---

## 📄 License

This project is created for **educational and portfolio purposes**.

You are free to modify and improve the project for learning purposes.

---

## 👨‍💻 Author

### Tanmay Shakya

**Front-End Developer | Web Development Learner | UI/UX Enthusiast**

Interested in building responsive, interactive and modern web experiences.

---

<div align="center">

## ⭐ Like This Project?

Give the repository a ⭐ and use it as a reference for learning CSS animations and responsive web design.

### Built with HTML & CSS

**© Tanmay Shakya**

</div>
