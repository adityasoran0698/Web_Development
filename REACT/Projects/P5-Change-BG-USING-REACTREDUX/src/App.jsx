import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  changeBgColor,
  changeColorManually,
  reset,
} from "./Features/changebg/BgSlice.jsx";
function App() {
  const dispatch = useDispatch();
  const ColorValue = useSelector((state) => state.bgColor.value);
  const [color, setColor] = useState("");
  function handlechangecolor() {
    dispatch(changeBgColor());
  }
  function handlechangeManually() {
    dispatch(changeColorManually(color));
  }
  function handleResetClick() {
    dispatch(reset());
  }
  useEffect(() => {
    document.body.style.backgroundColor = ColorValue;
  }, [ColorValue]);
  useEffect(() => {
    document.body.style.backgroundColor = ColorValue;
  }, []);

  return (
    <>
    <div className="container">
    <div className="box">
      <button onClick={handlechangecolor}>Change Bg-color</button>
     
      <input
        type="text"
        placeholder="Enter any color or its code"
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handlechangeManually}>Change Manually</button>
      
      <button onClick={handleResetClick}>Reset</button>
      </div>
      </div>
    </>
  );
}

export default App;
