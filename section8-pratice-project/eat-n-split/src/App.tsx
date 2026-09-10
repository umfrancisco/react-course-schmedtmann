import { useState } from "react"
import Button from "./components/Button"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSplitBill"
import FriendsList from "./components/FriendsList"

const initialFriends: Friend[] = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]

function App() {

  const [friends, setFriends] = useState<Friend[]>(initialFriends)
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

  function handleSplitBill(value: number) {
    console.log(value)
    setFriends(friends => friends.map(
      friend => selectedFriend && (friend.id === selectedFriend.id) ? {...friend, balance: friend.balance + value} : friend
    ))
    setSelectedFriend(undefined)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  )
}

export default App
