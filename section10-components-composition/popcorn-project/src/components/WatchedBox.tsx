import { useState } from "react"
import WatchedSummary from "./WatchedSummary"
import ToggleButton from "./ToggleButton"
import WatchedList from "./WatchedList"

type Props = {
  watched: Watched[]
}

function WatchedBox({ watched }: Props) {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  )
}

export default WatchedBox