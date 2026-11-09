# Advanced Counter

A React + TypeScript counter that goes beyond simple clicks. Built for Per Scholas Lab 1 (Module 10): **React Counter with useEffect**.

## Features

- **Increment / Decrement** buttons
- **Step Value:** type how much each click adds or subtracts (default is 1)
- **Count History:** shows every count in order, or "No history yet." when empty
- **Reset:** sets the count back to 0 and clears the history
- **Auto-Save:** saves the count to localStorage 1 second after the last change, with a "Saving changes..." / "Changes saved." message
- **Keyboard controls:** ArrowUp increments, ArrowDown decrements

## Tech Used

- React
- TypeScript
- Vite

## How to Run

```bash
git clone https://github.com/aubrey-strauss/advanced-counter.git
cd advanced-counter
npm install
npm run dev
```

Then open the localhost link shown in the terminal.

## How It Works

- **`useState`** holds the count, the step value, the history list, and the save message.
- **Auto-save `useEffect`** runs whenever the count changes. It waits 1 second before saving. If the count changes again first, the cleanup function cancels the waiting save (`clearTimeout`), so only the latest value is saved.
- **Keyboard `useEffect`** adds a `keydown` listener to `document` and removes it in the cleanup function, so listeners never pile up. Its dependency array lists the increment and decrement handlers, so the arrows always use the current count and step.

## Known Issues

- If your cursor is in the Step Value box, the arrow keys change the step *and* the count. Click the page background before using the arrows.
