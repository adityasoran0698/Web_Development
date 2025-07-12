import { useState, createContext } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState("Light Theme");
  return (
    <>
      <UserContext.Provider value={{data,setData}}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            className="container"
            style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
          >
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
export { UserContext };
