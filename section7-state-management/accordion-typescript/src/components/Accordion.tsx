import AccordionItem from "./AccordionItem"

type Props = {
    data: Faq[]
}

function Accordion({ data }: Props) {

    return (
        <div className="accordion">
            {data.map((faq, index) => (
                <AccordionItem key={faq.title} num={index + 1} title={faq.title} text={faq.text} />
            ))}
        </div>
    )
}

export default Accordion