import { useEffect, useState } from "react"
import "./styles.css"

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date()
  date.setDate(date.getDate() + count)
    
  return (
    <div className="small-container">
      <div className="count">
        <input className="bar" type="range" min="1" max="10" value={step} onChange={e => setStep(parseInt(e.target.value))} />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount(c => c - step)}>-</button>
        <input type="text" value={count} onChange={e => setCount(parseInt(e.target.value))} />
        <button onClick={() => setCount(c => c + step)}>+</button>
      </div>
      <p>
        {count === 0 ? "Today is" : ""} {date.toDateString()}
      </p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Counter />
    </div>
  )
}

export default App

