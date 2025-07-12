import { useState, useEffect,useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const val = useRef(0)
  const btnref = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mai firse Render Hogya hu");
    val.current = val.current + 1;
    console.log(val.current);
  });

  return (
    <>
      <div>
        <div className="number">{count}</div>
        <button ref={btnref}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update me
        </button>
        <br /><br />
        <button onClick={()=>{btnref.current.style.backgroundColor='red'}}>Change the color of a button</button>
      </div>
    </>
  );
}

export default App;
