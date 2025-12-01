import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const response = await fetch(
      `https://YOUR_BACKEND_URL/calculate?a=${a}&b=${b}&op=${op}`
    );
    const data = await response.json();
    setResult(data.result || data.error);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Calculator App</h2>
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Number A" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Number B" />
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
