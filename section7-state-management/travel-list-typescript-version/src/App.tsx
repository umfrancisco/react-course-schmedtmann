import { useState } from "react"
import "./index.css"

type Item = {
  id: number
  description: string
  quantity: number
  packed: boolean
}

const initialItems: Item[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
]

function Logo() {
  
  return (
    <h1>Far away</h1>
  )
}

function Form() {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!description) {
      return
    }

    const item: Item = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    }
    console.log(item)

    setDescription("")
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1)
          .map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

type Props = {
  item: Item
}

function Item({ item }: Props) {
  
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="close-btn">&times;</button>
    </li>
  )
}

function PackingList() {

  return (
    <div className="list">
      <ul>
        {initialItems.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  ) 
}

function Stats() {
  
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

function App() {

  // state => internal data, owned by the component
  // props => external data, owned by parent component
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

export default App
