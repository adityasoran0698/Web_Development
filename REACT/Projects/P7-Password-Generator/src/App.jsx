import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(str.length * Math.random() + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);
  const copyPasswordtoClipboard =useCallback(()=>{
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
     
      <div className="test">
        <div>
          <h1>Password Generator</h1>
          <input type="text" value={password} placeholder="password"  readOnly ref={passwordRef} />
          <button onClick={copyPasswordtoClipboard}>Copy</button>
        </div>
        <div className="control">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Lenght:{length}</label>

          <input
            type="checkbox"
            onChange={() => {
              setNumberAllowed(!numberAllowed);
            }}
          />
          <label>Number</label>

          <input
            type="checkbox"
            onChange={() => {
              setCharAllowed(!charAllowed);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
