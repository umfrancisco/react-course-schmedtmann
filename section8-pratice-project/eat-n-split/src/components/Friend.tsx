import Button from "./Button"

type Props = {
  friend: Friend
}

function Friend({ friend }: Props) {

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owes you ${friend.balance}</p>}
      <Button>Select</Button>
    </li>
  )
}

export default Friend
