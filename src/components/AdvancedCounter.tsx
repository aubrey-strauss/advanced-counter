import { useState } from "react";

function AdvancedCounter() {
  // Array destructuring
  // useState hands back a pair, and the brackets unpack it into two named variables
  const [count, setCount] = useState(0);
  {
    /* (prev) => prev + 1 means “take whatever the count was just before this and add 1.” 
      It’s safer than count + 1 because it always uses the newest value. 
      That matters later when the keyboard arrows also change the count. */
  }
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h2>Advanced Counter</h2>
      <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
      <p>Current count: {count}</p>
      <p>Changes saved.</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <label htmlFor="step">Step Value:</label>
      <input type="number" id="step" name="step" defaultValue={1} />
      <h3>Count History</h3>
      <p>No history yet.</p>
    </div>
  );
}

export default AdvancedCounter;
