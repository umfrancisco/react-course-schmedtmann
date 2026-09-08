import { useState } from "react"
import Button from "./Button"

type Props = {
  onAddFriend: (friend: Friend) => void
}

function FormAddFriend({ onAddFriend }: Props) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name || !image) {
      return
    }
    
    const friendId = crypto.randomUUID()
    const friend: Friend = {
      id: friendId,
      name: name,
      balance: 0,
      image: `${image}?=${friendId}`
    }
    onAddFriend(friend)

    setName("")
    setImage("https://i.pravatar.cc/48")
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>Image URL</label>
      <input type="text" value={image} onChange={e => setImage(e.target.value)}/>

      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend