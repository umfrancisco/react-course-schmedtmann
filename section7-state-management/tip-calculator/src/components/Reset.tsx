
type Props = {
  onReset: () => void
}

function Reset({ onReset }: Props) {

  return (
    <button onClick={onReset}>Reset</button>
  )
}

export default Reset