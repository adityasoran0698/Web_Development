import { useState, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  
  const timerRef = useRef(null);
  return (
    <>
      <h1 >Stopwatch: {time} seconds</h1>
      <button onClick={()=>{
        timerRef.current=setInterval(() => {
        setTime(time=>time+1);
      }, 1000);}}>Start Timer</button>
      <br /><br />

      <button onClick={()=>{
        clearInterval(timerRef.current);
        timerRef.current=null;
      }}>Stop Timer</button>
      <br /><br />

      <button onClick={()=>{
        clearInterval(timerRef.current);
        timerRef.current=null;
        setTime(0)
        }}>Reset Timer</button>
      
    </>
  );
}

export default App;
