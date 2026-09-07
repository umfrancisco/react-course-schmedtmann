import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Button({ children }: Props) {

  return (
    <button className="button">{children}</button>
  )
}

export default Button