import type { ItemObj } from "../App"
import Item from "./Item"

type Props = {
  items: ItemObj[]
}

function PackingList({ items }: Props) {

  return (
    <div className="list">
      <ul>
        {items.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  ) 
}

export default PackingList