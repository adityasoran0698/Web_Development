import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <>
    <div>
      <h1>Home Page</h1>
       </div>
      <button onClick={handleClick}>Move to dashboard</button>
   </>
  );
};

export default Home;
