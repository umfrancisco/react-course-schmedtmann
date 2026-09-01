import { useState } from "react"
import Button from "./Button"

type Props = {
    messages: string[]
}

function Steps({ messages }: Props) {

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
          <Button btnStyle={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
            <p>Previous</p>
          </Button>
          <Button btnStyle={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
            <p>Next</p>
          </Button>
        </div>
      </div>
    )}
    </>
  )
}

export default Steps