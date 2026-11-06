import { useState, useEffect } from "react";

function AdvancedCounter() {
  // Array destructuring
  // useState hands back a pair, and the brackets unpack it into two named variables
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("1");
  const [history, setHistory] = useState<number[]>([]);
  const [saveStatus, setSaveStatus] = useState("Changes saved.");
  /* (prev) => prev + 1 means “take whatever the count was just before this and add 1.” 
      It’s safer than count + 1 because it always uses the newest value. 
      That matters later when the keyboard arrows also change the count. */
  const handleIncrement = () => {
    const newCount = count + Number(step); // figure out the new number once
    setCount(newCount); // save it as the count
    setHistory((prev) => [...prev, newCount]); // and add it to the history
  };
  const handleDecrement = () => {
    const newCount = count - Number(step);
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  };
  const handleReset = () => {
    setCount(0);
    setHistory([]);
  };
  //Add a useEffect hook to save the count to localStorage whenever it changes.
  useEffect(() => {
    setSaveStatus("Saving changes...");
    const timerId = setTimeout(() => {
      console.log("Saving count:", count);
      localStorage.setItem("count", count.toString());
      setSaveStatus("Changes saved.");
    }, 1000); // Save after 1 second of inactivity

    return () => clearTimeout(timerId); // Cleanup the timer on unmount or before the next effect
  }, [count]); // Only re-run the effect if count changes

  //Add a useEffect hook to load the count from localStorage when the component mounts.
  return (
    <div>
      <h2>Advanced Counter</h2>
      <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
      <p>Current count: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <label htmlFor="step">Step Value:</label>
      <input
        type="number"
        id="step"
        name="step"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <p>{saveStatus}</p>
      <h3>Count History</h3>
      {/* If the history's length is 0, show "No history yet."; otherwise, show the history joined with commas. */}
      <p> {history.length === 0 ? "No history yet." : history.join(", ")}</p>
    </div>
  );
}
export default AdvancedCounter;
