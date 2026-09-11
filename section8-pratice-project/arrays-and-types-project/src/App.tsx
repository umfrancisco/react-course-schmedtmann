import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Math({ children }: Props) {
  
  return (
    <>
      <span>{children}</span>
      <br/>
    </>
  )
}

const arr = [1, 3, 5, 7, 9, 11]

function App() {

  function getAvg(arr: number[]) {
    let sum = 0
    arr.forEach(el => sum += el)
    return sum / arr.length
  }

  function getMax(arr: number[]) {
    let max = 0
    arr.forEach(el => el > max ? max = el : el)
    return max
  }

  return (
    <div className="container">
        <Math>Array = {arr.map((el, index) => index === arr.length - 1 ? el : el.toString().concat(", "))}</Math>
        <Math>Average = {getAvg(arr)}</Math>
        <Math>Max = {getMax(arr)}</Math>
    </div>
  )
}

export default App
