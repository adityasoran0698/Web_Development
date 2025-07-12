import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  // Case 3:Runs on when certain value changes.
  useEffect(() => {
    alert("count was changed");
    setColor(color + 1);
  }, [count]);

  return (
    <>
      <Navbar color={"navy " + "blue" + color} />
      <div className="number">{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update count
      </button>
    </>
  );
}

export default App;
