import { useState } from "react"
import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import FriendsList from "./components/FriendsList"

function App() {

  const [friends, setFriends] = useState<Friend[]>([])
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState<Friend | undefined>()

  function handleShowAddFriend() {
    setShowAddFriend(s => !s)
  }

  function handleAddFriend(friend: Friend) {
    const updatedFriends = [...friends, friend]
    updatedFriends.sort((a, b) => a.name.localeCompare(b.name))
    setFriends(updatedFriends)
  }

  function handleSelection(friend: Friend) {
    setSelectedFriend(selectedFriend && selectedFriend.id === friend.id ? undefined : friend)
    setShowAddFriend(false)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend}/>}
    </div>
  )
}

export default App
