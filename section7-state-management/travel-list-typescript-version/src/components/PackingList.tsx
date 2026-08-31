import { useState } from "react"
import type { ItemObj } from "../App"
import Item from "./Item"

type Props = {
  items: ItemObj[]
  onDeleteItem: (id: number) => void
  onToggleItem: (id: number) => void
}

function PackingList({ items, onDeleteItem, onToggleItem }: Props) {

  const [sortBy, setSortBy] = useState("input")
  let sortedItems: ItemObj[] = []

  if (sortBy === "input") {
    sortedItems = items
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  ) 
}

export default PackingList