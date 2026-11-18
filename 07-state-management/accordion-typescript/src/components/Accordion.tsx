import { useState } from "react"
import AccordionItem from "./AccordionItem"

type Props = {
    data: Faq[]
}

function Accordion({ data }: Props) {

    const [ curOpen, setCurOpen] = useState<number | null>(null)

    return (
        <div className="accordion">
            {data.map((faq, index) => (
                <AccordionItem key={faq.title} curOpen={curOpen} onOpen={setCurOpen} num={index + 1} title={faq.title}>
                    {faq.text}
                </AccordionItem>
            ))}
        </div>
    )
}

export default Accordion