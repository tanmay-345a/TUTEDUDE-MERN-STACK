# Offline Chess Game

## Project Description

This project is an offline two-player chess game developed using ReactJS.

The game allows two players to play chess on the same computer without using any online service or chess library.

## Technologies Used

- ReactJS
- JavaScript
- HTML
- CSS
- Vite

## Features

- 8 x 8 Chess Board
- White and Black Chess Pieces
- Two Player Turn System
- Legal Piece Movement
- Check Detection
- Checkmate Detection
- Countdown Timer
- Move List
- Captured Pieces Display
- Undo Last Move
- Pawn Promotion
- New Game Button
- Works Offline

## How to Run the Project

1. Open the project folder in VS Code.
2. Open the terminal.
3. Run:

   npm install

4. Start the project using:

   npm run dev

5. Open the local URL shown in the terminal.

## Game Rules

- White plays first.
- Players take turns.
- A player can move only their own pieces.
- Illegal moves are not allowed.
- The King cannot be left in check.
- Checkmate ends the game.
- When the timer reaches zero, the opponent wins.
- A pawn reaching the opposite end is promoted to a Queen.

## Project Structure

chess-game/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
├── index.html
└── README.md

## Conclusion

The Offline Chess Game provides a simple two-player chess experience using ReactJS. It demonstrates React state management, event handling, game logic, timers and user interface design.
