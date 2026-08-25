import { useState } from "react"
import "./styles.css"

function Counter() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
    
  return (
    <div className="small-container">
      <div className="count">
        <button onClick={() => setStep(s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
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

