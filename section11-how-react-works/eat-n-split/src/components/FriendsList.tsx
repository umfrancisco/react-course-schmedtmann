import Friend from "./Friend"

type Props = {
  friends: Friend[]
  onSelection: (friend: Friend) => void
  selectedFriend: Friend | undefined
}

function FriendsList({ friends, onSelection, selectedFriend }: Props) {

  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  )
}

export default FriendsList