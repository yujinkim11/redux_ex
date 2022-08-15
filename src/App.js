import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>증가 +</button>
    </div>
  );
}

export default App;
