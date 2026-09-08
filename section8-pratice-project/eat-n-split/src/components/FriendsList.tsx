import Friend from "./Friend"

type Props = {
  friends: Friend[]
}

function FriendsList({ friends }: Props) {

  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  )
}

export default FriendsList