import { useState } from "react"

type Props = {
  item: Content | undefined
}

function TabContent({ item }: Props) {
  const [showDetails, setShowDetails] = useState(true)
  const [likes, setLikes] = useState(0)

  function handleInc() {
    setLikes(l => l +1);
  }

  if (item === undefined) {
    return <div>Undefined Item</div>
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  )
}

export default TabContent