# Online Shoe Store

## Problem Statement

Create a React application for an online shoe store where users can browse shoes and add them to a shopping cart.

## Project Description

This application displays a collection of shoes with their name, price, and image.

Users can add shoes to the shopping cart. The cart displays the selected shoes, their quantity, price, and total cost.

The React `useState` Hook is used to manage the shopping cart.

## Features

### 1. Displaying Shoes

The application displays different shoes with:

- Shoe image
- Shoe name
- Shoe price
- Add to Cart button

### 2. Shopping Cart

The shopping cart displays:

- Selected shoe name
- Price
- Quantity
- Remove button

### 3. Add to Cart

Users can click the Add to Cart button to add a shoe to the cart.

If the same shoe is added again, its quantity increases.

### 4. Remove from Cart

Users can remove a shoe from the cart.

The quantity decreases when the Remove button is clicked.

### 5. Cart Total

The application calculates and displays the total cost of all items in the cart.

## React Hook Used

### useState

The `useState` Hook is used to store and update the shopping cart.

Example:

```jsx
const [cart, setCart] = useState([]);
