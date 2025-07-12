import "./App.css";
import { createContext } from "react";
import ChildA from "./components/ChildA";
import { useState } from "react";
// Step1 Create context
const UserContext = createContext();
  // Step2 Wrap all children inside a provider
  // Step3 Pass Value
  // Step4 Consumer k andar jaake consume karlo

function App() {
  // Define the value you want to provide
  const [data, setData] = useState({name:"Aditya",age:21});

  return (
    <>
      <UserContext.Provider value={data}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export {UserContext};
