# TODO — React Counter with useEffect (Lab 1, M10)

Just the tasks. Check things off as you go: change `[ ]` to `[x]`.

**Approach: top-down, screen first, then make it work.**

1. Build the whole screen as placeholders (fake values, buttons that do nothing).
2. Add state so the numbers are real.
3. Add handlers so the buttons and input work.
4. Add effects last (auto-save, keyboard), because they react to everything else.

**Grading:** Complete/Incomplete. Needs all core features plus at least 3 of the 4 advanced ones (History, Auto-Save, Keyboard, Reset). This plan does all 4 plus the Step Input.

## Phase 0: Setup

- [x] Clone the GitHub repo (`aubrey-strauss/advanced-counter`)
- [x] Scaffold a Vite + React + TypeScript project
- [x] `npm install`
- [x] `npm run dev` and see the Vite demo page in the browser
- [x] First commit + push

## Phase 1: Clean up + folders

- [ ] Delete the Vite demo code in `App.tsx`
- [ ] Clear out the demo styles in `App.css` (keep the file, empty it)
- [ ] Delete leftover demo images: `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`
- [ ] Create a `components/` folder in `src`
- [ ] Commit + push

## Phase 2: Screen structure (placeholders, nothing works yet)

- [ ] Create `components/AdvancedCounter.tsx` (returns a simple placeholder)
- [ ] `App.tsx` shows `AdvancedCounter`
- [ ] Add the layout with fake values:
  - [ ] Heading "Counter" + "Current Count: 0" (typed in, not state yet)
  - [ ] Decrement, Increment, Reset buttons (no `onClick` yet)
  - [ ] "Step Value" input
  - [ ] "Changes saved." message
  - [ ] "Count History" section showing "No history yet."
  - [ ] Hint: "Use ArrowUp to increment and ArrowDown to decrement."
- [ ] Check it: the whole screen shows up in the browser
- [ ] Commit + push

## Phase 3: Core counter (real data)

- [ ] Add `useState` for `count`, starting at 0
- [ ] Show `count` in place of the fake 0
- [ ] Write `increment` and `decrement` handlers (use the previous value: `prev => ...`)
- [ ] Connect them to the buttons with `onClick`
- [ ] Check it: both buttons work, and the count can go below 0
- [ ] Commit + push

## Phase 4: Step input

- [ ] Add `useState` for `step`, starting at 1
- [ ] Connect the input to `step` (`value` + `onChange`)
- [ ] Convert the input's text into a number
- [ ] Decide what happens with an empty box, 0, or a negative number
- [ ] Update `increment` / `decrement` to use `step` in place of 1
- [ ] Check it: step 5 → Increment adds 5
- [ ] Commit + push

## Phase 5: History tracking

- [ ] Add `useState` for `history` (an array of numbers)
- [ ] Every time the count changes, add the new value to the end of `history`
- [ ] Show the list (for example "0, 1, 2, 1"), or "No history yet." when it's empty
- [ ] Check it: click a few times and watch the list grow
- [ ] Commit + push

## Phase 6: Reset

- [ ] Write a `reset` handler: count back to 0, history cleared
- [ ] Connect it to the Reset button
- [ ] Check it: count shows 0 and "No history yet." comes back
- [ ] Commit + push

## Phase 7: Auto-save (first `useEffect`)

- [ ] Add a `useEffect` that saves `count` to localStorage
- [ ] Dependency array: only re-run when `count` changes
- [ ] Add a short delay (`setTimeout`) before saving
- [ ] Cleanup function: cancel the waiting save (`clearTimeout`) if the count changes again first
- [ ] Add `useState` for the save message ("Saving..." → "Changes saved.")
- [ ] Bonus: start the count from the saved value when the page loads
- [ ] Check it: DevTools → Application → Local Storage shows the count
- [ ] Commit + push

## Phase 8: Keyboard arrows (second `useEffect`)

- [ ] Write a function that checks the key: ArrowUp → increment, ArrowDown → decrement
- [ ] Add a `useEffect` that attaches it to `document` with `addEventListener('keydown', ...)`
- [ ] Cleanup function: `removeEventListener` with the same function
- [ ] Get the dependency array right (think about `step`)
- [ ] Check it: one key press moves the count exactly once (by the step amount)
- [ ] Commit + push

## Phase 9: Test everything

- [ ] Click through every feature one more time
- [ ] Open the browser console: no red React errors
- [ ] Use `console.log` to watch when each effect runs and cleans up
- [ ] Remove leftover `console.log`s you don't need
- [ ] Commit + push

## Phase 10: Submission

- [ ] README.md (description, features, install/run steps)
- [ ] Make sure the repo is public
- [ ] Final push, submit the GitHub link on Canvas
