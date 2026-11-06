import { useState } from "react";

function AdvancedCounter() {
  // Array destructuring
  // useState hands back a pair, and the brackets unpack it into two named variables
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Advanced Counter</h2>
      <p>Current count: {count}</p>
      {/* (prev) => prev + 1 means “take whatever the count was just before this and add 1.” 
      It’s safer than count + 1 because it always uses the newest value. 
      That matters later when the keyboard arrows also change the count. */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default AdvancedCounter;
