import type { ReactNode } from "react"

type Props = {
    step: number
    children: ReactNode
}

function StepMessage({ step, children }: Props) {

    return (
        <div className="message">
          <h3>Step {step}</h3>
          {children}
        </div>
    )
}

export default StepMessage