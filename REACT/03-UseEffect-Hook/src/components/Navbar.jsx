import React from "react";
import { useEffect } from "react";
const Navbar = ({ color }) => {
  // Case 1:Runs on every Render
  useEffect(() => {
    alert("Hey I will run on every Render");
  })

  // Case 2:Runs on First Render
  useEffect(() => {
    alert("Hey Welcome to my page. This is first Render");
  }, []);

  useEffect(() => {
    alert("color was changed");
  }, [color]);
  useEffect(() => {
    alert("Welcome to navbar.jsx")
  
    return () => {
      alert("component unmounted")
    }
  }, [])
  

  return(
    <div>
      I am a navbar of {color} color
      </div>
) 
}
export default Navbar;
