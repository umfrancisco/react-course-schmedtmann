import { useState } from "react"
import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import "./index.css"

export type ItemObj = {
  id: number
  description: string
  quantity: number
  packed: boolean
}

function App() {

  const [items, setItems] = useState<ItemObj[]>([])

  function handleAddItems(item: ItemObj) {
    setItems(items => [...items, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

export default App
