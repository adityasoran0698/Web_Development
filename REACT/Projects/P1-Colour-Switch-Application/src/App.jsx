import {useState} from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  function getRandomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let idx = (parseInt(16 * Math.random()));
      color = color + hex[idx];
      console.log(color)
    }
    return color;
  }
  function ChangeColor() {
    let documentStyle = document.body.style;
    documentStyle.backgroundColor = getRandomColor();
  }
  return (
    <>
      <div className="body" onClick={() => setCount((count) => count + 1)}>
        <button onClick={ChangeColor}>Change a Color</button>
        <h1>Clicks on the page: {count}</h1>
      </div>
    </>
  );
}

export default App;
