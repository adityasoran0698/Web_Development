// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  function handleClick() {
    alert("I am Clicked!!");
  }
  // function handlePara() {
  //   alert("I am Para!!");
  // }
  function handleChange(e) {
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted!!")
  }
  return (
    <>
      {/* <p onMouseOver={handlePara}>I am para</p> */}
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <button type="submit" style={{marginRight:'20px'}}>Submit</button>
        <input type="text" onChange={handleChange} />
      </form>
    </>
  );
}

export default App;
