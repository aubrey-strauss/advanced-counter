# NOTES — for README.md

Raw material to copy from when writing the final README.
(Tasks are in TODO.md.)

---

## README notes

**App name:** Advanced Counter (React Counter with useEffect, Lab 1, M10)

**Description (draft):**
A React counter that goes beyond simple clicks: a custom step value, a history of every count,
a reset button, auto-saving to localStorage, and keyboard controls.

**Tech used:**
- React
- TypeScript
- Vite

**Features built so far:**
- Increment / Decrement buttons
- Step Value input (buttons move by the step)
- Count History list ("No history yet." when empty)
- Reset (count back to 0, history cleared)
- Auto-save to localStorage with a 1-second delay and cleanup
- "Saving changes..." / "Changes saved." message that shows the real save status
- Keyboard controls: ArrowUp increments, ArrowDown decrements (listener on `document`, removed in cleanup)
- Basic CSS: centered card layout with light/dark mode

**Install & run (for the README):**
```bash
git clone https://github.com/aubrey-strauss/advanced-counter.git
cd advanced-counter
npm install
npm run dev
```
Then open the localhost link shown in the terminal.

---

## Learning notes

Jot things down as they happen. Raw notes are fine.

### Challenges
- Phase 4: typing a new step showed "02". Cause: the step was stored as a number, so an empty box
  became 0 and React kept the 0 in front. Fix: store the step as text and convert it with
  `Number(step)` only when the buttons do math.
- Phase 4–5: changes "didn't work" a few times because the file wasn't saved. The browser only runs
  saved code. Fix: turned on Auto Save in VS Code.
- Phase 5: deleted `handleDecrement` by accident while rewriting `handleIncrement`, so the Decrement
  button showed a red squiggle ("can't find this name").
- Phase 7 (difficult): my first `useEffect` for auto-save. Got a 500 error because the effect was
  started but never closed, so Vite couldn't read the file. Needed to slow down and go one line at a time.
- Phase 7 (another difficult one): the "Saving..." / "Changes saved." message. It stayed on
  "Changes saved." forever because (1) nothing ever set it to "Saving..." and (2) the screen still
  showed the typed-in placeholder text, not the `saveStatus` state. Then (3) I put
  `setSaveStatus("Changes saved.")` just *outside* the timer, so it ran instantly and React only drew
  the last update. Fix: moved it *inside* the `setTimeout` braces. Lesson: only code between the
  timer's `{ }` waits; everything else in the effect runs right away.
- Phase 8: put the new keyboard `useEffect` *inside* the auto-save effect by mistake. Hooks have to sit
  at the top level of the component (Rules of Hooks), so it had to move below `}, [count]);`.
- Phase 8: autocomplete wrote the keyboard effect with an empty `[]`. With `[]` the listener only knows
  the handlers from the first draw (count 0), so ArrowUp got stuck at 1 (a "stale" value). Fix: list
  `handleIncrement` and `handleDecrement` in the dependency array. Also switched `window` to `document`
  to match the lab.
- Phase 8: history showed `4, 1, 1, 5, 1, 1...` with step 4. Cause: "ghost" listeners left over from
  older versions of the code while hot reload swapped code into the open page; every key press ran
  three listeners. Fix: a full page refresh (F5). Lesson: after editing effects, refresh before testing.
- Autocomplete (Copilot) kept writing code ahead of me, including a load effect that erased the saved
  count on every page load. Removed it so I could learn it myself.

### Design decisions
- **Top-down build order:** built the whole screen as placeholders first, then made each piece real.
- **Named handlers (`handleIncrement`, `handleDecrement`, `handleReset`):** so the keyboard arrows can
  reuse the same code as the buttons.
- **Step stored as text:** avoids the "02" problem; converted with `Number()` when used.
- **No guard on the step (Option A):** an empty box or 0 just does nothing; negatives flip direction.
- **Reset leaves the step alone:** the user picked it on purpose. (The lab only requires count + history.)
- **Auto-save waits 1 second:** if the count changes again first, the cleanup cancels the old save
  (`clearTimeout`), so only the last value is saved.
