import { useState,useCallback } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  //1st Category of UseCallback use

  // const [count, setCount] = useState(0);
  // const handleClick=useCallback(
  //   ()=>{
  //   setCount(count+1);
  // },[]
  // )
  
  // return (
  //   <>
  //     <div>Count: {count}</div>
  //     <button onClick={handleClick}>Increment</button>
  //     <br /><br />
  //     <div>
  //       <ChildComponent buttonName="Click me" handleclick={handleClick}/>
  //     </div>
  //   </>
  // );
    //1st Category of UseCallback use
    return (
    <>
    <div>
      <ExpensiveComponent />
    </div>
     </>
  );

}

export default App;
