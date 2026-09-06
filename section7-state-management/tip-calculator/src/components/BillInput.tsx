
type Props = {
  bill: string
  onSetBill: React.Dispatch<React.SetStateAction<string>>
}

function BillInput({ bill, onSetBill }: Props) {

  return (
    <div>
      <label>How much was the bill?</label>
      <input type="number" placeholder="Bill value" value={bill} onChange={e => onSetBill(e.target.value)} />
    </div>
  )
}

export default BillInput