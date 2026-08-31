import type { ItemObj } from "../App"
import Item from "./Item"

type Props = {
  items: ItemObj[]
  onDeleteItem: (id: number) => void
  onToggleItem: (id: number) => void
}

function PackingList({ items, onDeleteItem, onToggleItem }: Props) {

  return (
    <div className="list">
      <ul>
        {items.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
      </ul>
    </div>
  ) 
}

export default PackingList