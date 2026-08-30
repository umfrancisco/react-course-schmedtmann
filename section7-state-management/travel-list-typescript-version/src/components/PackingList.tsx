import type { ItemObj } from "../App"
import Item from "./Item"

type Props = {
  items: ItemObj[]
  onDeleteItem: (id: number) => void
}

function PackingList({ items, onDeleteItem }: Props) {

  return (
    <div className="list">
      <ul>
        {items.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />)}
      </ul>
    </div>
  ) 
}

export default PackingList