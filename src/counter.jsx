import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleEventAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleEventRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <>
      <div style={{ border: "3px solid blue" }}>
        <h3>Count: {count}</h3>
        <button onClick={handleEventAdd}>Add</button>
        <button onClick={handleEventRemove}>Remove</button>
      </div>
    </>
  );
}
