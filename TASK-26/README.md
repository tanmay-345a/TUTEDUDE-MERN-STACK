# React Props Cards

## Problem Statement

Create a React component for a card that displays information passed through props.

## Project Description

This project demonstrates how React props can be used to create a reusable Card component.

The card receives the image, name, and description from the parent component using props.

## Features

- Displays multiple cards.
- Uses a reusable Card component.
- Passes data from App.jsx to Card.jsx using props.
- Displays image, name, and description.
- Uses a gradient border for each card.

## Props Used

The Card component receives three props:

- `name` - Name of the card.
- `image` - Image displayed on the card.
- `description` - Short description of the card.

Example:

```jsx
<Card
  name={card.name}
  image={card.image}
  description={card.description}
/>
