import type { ReactElement } from "react"

type Props = {
    btnStyle: {
        backgroundColor: string
        color: string
    }
    onClick: () => void
    children: ReactElement
}

function Button({ btnStyle, onClick, children }: Props) {

    return (
        <button style={btnStyle} onClick={onClick}>{children}</button>
    )
}

export default Button