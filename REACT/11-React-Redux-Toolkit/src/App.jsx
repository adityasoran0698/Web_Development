import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
import {
  increment,
  decrement,
  reset,
  IncrementByAmount
} from "./features/counter/CounterSlice.jsx";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Amount, setAmount] = useState(0);
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
      dispatch(reset());

  }
  function handleIncByAmountClick(){
     dispatch(IncrementByAmount(Amount));
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <br />
        <button onClick={handleIncByAmountClick}>Increment By Amount</button>
        <input 
        type="number"
        placeholder="Enter Amount"
        onChange={(e)=>setAmount(e.target.value)}
         />
      </div>
    </>
  );
}

export default App;
// STEPS:-
// 1. Create a Redux Store in src/redux/store.js.
// 2. Wrap the App component with the Provider component in src/main.jsx and pass the store as a prop to the Provider component.
// 3. Create a CounterSlice in src/features/counter/CounterSlice.jsx and import it in src/redux/store.js.
// 4. Register reducer in the store.
