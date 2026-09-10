import { useState } from "react"
import Button from "./Button"

type Props = {
  friend: Friend
}

function FormSplitBill({ friend }: Props) {

  const [bill, setBill] = useState(0)
  const [paidByUser, setPaidByUser] = useState(0)
  const [whoIsPaying, setWhoIsPaying] = useState("user")
  const paidByFriend = bill ? bill - paidByUser : 0

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friend.name}</h2>

      <label>Bill value</label>
      <input type="text" value={bill} onChange={e => setBill(Number(e.target.value))} />
      
      <label>Your expense</label>
      <input type="text" style={bill < paidByUser ? {borderColor: "red"} : {}} value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value))} />
      
      <label>{friend.name}'s expense</label>
      <input type="text" value={paidByFriend < 0 ? 0 : paidByFriend} disabled />

      <label>Who is paying the bill</label>
      <select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      
      <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill