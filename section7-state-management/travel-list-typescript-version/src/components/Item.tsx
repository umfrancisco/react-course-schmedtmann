import type { ItemObj } from "../App"

type Props = {
  item: ItemObj
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

export default Item