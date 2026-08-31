import { useState } from "react"
import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import "./index.css"

const data: ItemObj[] = [
  { id: 1, description: "socks", quantity: 10, packed: false },
  { id: 2, description: "notebook", quantity: 1, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
  { id: 4, description: "phone", quantity: 1, packed: false }
]

export type ItemObj = {
  id: number
  description: string
  quantity: number
  packed: boolean
}

function App() {

  const [items, setItems] = useState<ItemObj[]>(data)

  function handleAddItem(item: ItemObj) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id: number) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id: number) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  )
}

export default App
