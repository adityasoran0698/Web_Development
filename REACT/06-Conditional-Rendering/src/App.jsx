import { useState } from "react";
import "./App.css";
function App() {
  const [showbtn, setShowbtn] = useState(false);
  return (
    <>
      {showbtn ? (
        <button
          onClick={() => {
            setShowbtn(!showbtn);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setShowbtn(!showbtn);
            console.log(showbtn);
          }}
        >
          Login
        </button>
      )}
    </>
  );
}

export default App;
