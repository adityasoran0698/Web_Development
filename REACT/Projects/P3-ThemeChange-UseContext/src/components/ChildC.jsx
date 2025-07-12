import React from 'react'
import {useContext} from 'react';
import {ThemeContext,UserContext} from '../App'
const ChildC = () => {
    const {theme,setTheme}= useContext(ThemeContext);
    const{data,setData}=useContext(UserContext);
    function handleClick() {
      if(theme==='light'){
        setTheme('dark');
        setData('Dark Theme')
      }
      else{
        setTheme('light');
        setData('Light Theme')
      }
    }
  return (
    <div>
      <div className="theme" style={{color:theme==='light'?"black":"white"}}><h1>{data}</h1></div>
      
       <button onClick={handleClick} style={{border:theme==='light'?"2px solid black":"2px solid black",boxShadow:theme==='light'?"5px 5px 5px black":"5px 5px 5px white"}}>Change Theme</button>
    </div>
  )
}

export default ChildC