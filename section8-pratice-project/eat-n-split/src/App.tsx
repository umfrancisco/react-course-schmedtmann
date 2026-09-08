import { useState } from "react"
import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import FriendsList from "./components/FriendsList"

function App() {

  const [friends, setFriends] = useState<Friend[]>([])
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend(s => !s)
  }

  function handleAddFriend(friend: Friend) {
    const updatedFriends = [...friends, friend]
    updatedFriends.sort((a, b) => a.name.localeCompare(b.name))
    setFriends(updatedFriends)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App
