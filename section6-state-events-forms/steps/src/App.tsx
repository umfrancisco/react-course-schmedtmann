import { useState } from "react"
import "./index.css"

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
  "Learn more"
]

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const size = messages.length
  const count = 1

  function handlePrevious() {
    if (step > 1) {
      setStep(s => s - count)
    }
  }
  function handleNext() {
    if (step < size) {
      setStep(s => s + count)
    }
  }

  const mainBtn = {
    backgroundColor: "#7950f2",
    color: "#fff"
  }

  return (
    <>
    <button className="close" onClick={() => setIsOpen(o => !o)}>&times;</button>
    {isOpen && (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
          <div className={step >= 4 ? "active" : ""}>4</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button style={mainBtn} onClick={handlePrevious}>Previous</button>
          <button style={mainBtn} onClick={handleNext}>Next</button>
        </div>
      </div>
    )}
    </>
  )
}

export default App
