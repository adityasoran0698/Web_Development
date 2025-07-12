import { useState } from 'react'
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  function generateotp() {
    let chars="1234567890";
    let Newotp="";
    for(let i=0;i<6;i++){
      let indx=parseInt(10*Math.random())
      Newotp=Newotp+chars[indx]
      console.log(otp)
    }
   setOtp(Newotp);
  }

  return (
    <>
    <div className="container">
    <div className="otp"><h2>Your OTP is: {otp}</h2></div>
    <button onClick={generateotp}>Generate OTP</button>
     </div>
    
    </>
  );
}

export default App;
