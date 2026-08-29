import { useState } from "react"
import type { ItemObj } from "../App"

type Props = {
  onAddItems: (item: ItemObj) => void
}

function Form({ onAddItems }: Props) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!description) {
      return
    }

    const item: ItemObj = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    }

    onAddItems(item)

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

export default Form