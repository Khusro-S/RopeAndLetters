# Rope & Letters (Replica of the Classic Hangman Word Game)

A classic Hangman word game built with React, Vite, Tailwind CSS, and canvas-confetti. This game is responsive and features a custom loading screen for a fun user experience. It showcases the use of Context API, React hooks (useCallback, useMemo), and TypeScript.

## 🚀 Features

- `Classic Hangman Gameplay`: Guess the hidden word by suggesting letters.
- `Responsive Design`: The game adapts to various screen sizes.
- `Loading Screen`: A mimicked loading screen.
- `Confetti Animation`: Celebratory confetti effect using canvas-confetti.
- `Keyboard Input`: Players can guess letters using both the on-screen keyboard and their physical keyboard.
----
## 📝 How It Works

1. `Loading Screen`:
   - A mimicked loading screen is shown the first time a user visits the game, providing a brief, interactive experience before the game starts.
2. `Game Initialization`:
   - When the game starts, a random word is selected from a predefined list and displayed as underscores representing each letter.
3. `User Interaction`:
   - Players guess letters by clicking on the onscreen keyboard or pressing physical keys.
   - Each guessed letter is checked against the hidden word. Correct guesses reveal letters in the word, while incorrect guesses increase the hangman’s "gallows."
4. `State Management`:
   - The game state, including the current word, guessed letters, and number of attempts remaining, is managed using React Context API for global state management.
5. `React Hooks`:
   - useCallback is used to memoize functions that handle user interactions, preventing unnecessary re-renders.
   - useMemo is used to optimize performance.
6. `Winning and Losing`:
   - The game tracks the number of incorrect guesses and displays a win or loss message when appropriate.
   - Confetti animation is triggered on a win using canvas-confetti.
7. `Responsive Design`:
   - Tailwind CSS is used to ensure the game is responsive and looks good on various devices.

---
## ⚡ Technologies

- `Vite`
- `React.js`
- `TailwindCSS`
-  `Typescript`
-  `canvas-confetti`
---
## 🎥 Live Demo

<a href="https://ropeandletters.netlify.app" target="_blank"> Rope & Letters </a>
---

## 🎥 Demo/Preview

https://github.com/user-attachments/assets/050f5b11-7fd5-4c7a-bf75-33c3128b9604

---
## 🚦 Running the Project Locally

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` or `yarn` to install the required dependencies.
5. Start the project with `npm run dev` or `yarn dev`.
6. Open http://localhost:5173 (or the address displayed in your console) in your web browser to view the application.
