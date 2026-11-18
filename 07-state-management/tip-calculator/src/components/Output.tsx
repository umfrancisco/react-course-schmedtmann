
type Props = {
  bill: string
  tip: number
}

function Output({ bill, tip }: Props) {

  const total = Number(bill) + tip

  return (
    <h3>You pay ${total} (${bill === "" ? 0 : bill} + ${tip} tip)</h3>
  )
}

export default Output