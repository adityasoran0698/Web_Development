import {useState} from 'react';
function App() {
const [count, setCount] = useState(0)
  return (
    <>
      <div className="value">{count}</div>
      <button className="btn" onClick={()=>{setCount(count+1)}}>UPDATE ME</button>
    </>
  )
}

export default App
