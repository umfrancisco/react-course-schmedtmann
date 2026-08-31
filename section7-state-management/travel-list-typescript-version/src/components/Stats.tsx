import type { ItemObj } from "../App"

type Props = {
  items: ItemObj[]
}

function Stats({ items }: Props) {

  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items</em>
      </footer>
    )
  }

  const numItems = items.length
  const packedItems = items.filter(item => item.packed).length
  const percent = Math.round((packedItems / numItems) * 100)
  
  return (
    <footer className="stats">
      <em>
        {percent === 100 ? (
          <>Ready to go!</>
        ) : (
          <>You have {numItems} items on your list, and you already packed {packedItems} ({percent}%)</>
        )}
      </em>
    </footer>
  )
}

export default Stats