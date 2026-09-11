import { useState } from "react"

function App() {

  const [arr, setArr] = useState<number[]>([])
  const [num, setNum] = useState<number>(0)

  function getAvg(arr: number[]) {
    let sum = 0
    arr.forEach(el => sum += el)
    return sum / arr.length
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setArr([...arr, num])
    setNum(0)
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Enter a number: </label>
          <input type="text" value={num} onChange={(e) => setNum(Number(e.target.value))}/>
          <button>Enter</button>
        </form>
        {arr.length > 0 ? (
          <div>
            <span>Array = {arr.map((el, index) => index === arr.length - 1 ? el : el.toString().concat(", "))}</span>
            <br/>
            <span>Average = {getAvg(arr)}</span>
            <br/>
          </div>
        ) : (
          <p>Empty array</p>
        )}
    </div>
  )
}

export default App
