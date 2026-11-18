import { useState } from "react"
import Button from "./Button"

type Props = {
  friend: Friend
  onSplitBill: (value: number) => void
}

function FormSplitBill({ friend, onSplitBill }: Props) {

  const [bill, setBill] = useState(0)
  const [paidByUser, setPaidByUser] = useState(0)
  const [whoIsPaying, setWhoIsPaying] = useState("user")
  const paidByFriend = bill ? bill - paidByUser : 0

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!bill || !paidByUser) {
      return
    }

    onSplitBill(whoIsPaying === "user" ? paidByFriend : paidByUser * -1)
  }

  function checkUserInput(input: string, func: (value: number) => void) {
    Number(input).toString() === "NaN" ? func(0) : func(Number(input))
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>Bill value</label>
      <input type="text" value={bill} onChange={e => checkUserInput(e.target.value, setBill)} />
      
      <label>Your expense</label>
      <input type="text" style={bill < paidByUser ? {borderColor: "red"} : {}} value={paidByUser} onChange={e => checkUserInput(e.target.value, setPaidByUser)} />
      
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