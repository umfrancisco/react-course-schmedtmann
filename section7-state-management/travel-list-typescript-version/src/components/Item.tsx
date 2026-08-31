import type { ItemObj } from "../App"

type Props = {
  item: ItemObj
  onDeleteItem: (id: number) => void
  onToggleItem: (id: number) => void
}

function PackingItem({ item, onDeleteItem, onToggleItem }: Props) {
  
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)}/>
      <span style={item.packed ? {textDecoration: "line-through"} : {}} >
        {item.quantity} {item.description}
      </span>
      <button className="close-btn" onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}

export default PackingItem