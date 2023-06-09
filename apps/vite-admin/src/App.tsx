import { useState } from "react";
import { Button, Carousel } from "ui";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 p-6 text-white">
      <div>
        <Button />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Carousel />
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
