import type { ItemObj } from "../App"

type Props = {
  item: ItemObj
  onDeleteItem: (id: number) => void
}

function PackingItem({ item, onDeleteItem }: Props) {
  
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="close-btn" onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}

export default PackingItem