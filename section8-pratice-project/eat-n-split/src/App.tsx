import { useState } from "react"
import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import FriendsList from "./components/FriendsList"

function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend(s => !s)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App
