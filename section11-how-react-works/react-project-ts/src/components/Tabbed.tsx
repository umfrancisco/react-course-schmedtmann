import { useState } from "react"
import Tab from "./Tab"
import TabContent from "./TabContent"
import DifferentContent from "./DifferentContent"

type Props = {
  content: Content[]
}

function Tabbed({ content }: Props) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        // <TabContent item={content[activeTab]} />
        <TabContent item={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  )
}

export default Tabbed