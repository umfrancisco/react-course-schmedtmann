import Button from "./Button"

type Props = {
  friend: Friend
  onSelection: (friend: Friend) => void
  selectedFriend: Friend | undefined
}

function Friend({ friend, onSelection, selectedFriend }: Props) {

  const isSelected = selectedFriend && selectedFriend.id === friend.id

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owes you ${friend.balance}</p>}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  )
}

export default Friend
