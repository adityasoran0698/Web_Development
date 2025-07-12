import { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setinput] = useState(0)
    function handleClick() {
      setCount(count+1);
    }
    function expensiveTask(num) {
      for(let i=0;i<=1000000000;i++){}
      return num*2;
    }
    let doubledValue=useMemo(() => expensiveTask(input), [input])
  return (
    <>
<button onClick={handleClick}>Increment</button>
<p> Count: {count}</p>
<input type="number" 
placeholder="Enter a number"
onChange={(e)=>setinput(e.target.value)}
value={input}
/>
<div>Double:{doubledValue}</div>
  </>
  )
}

export default App
