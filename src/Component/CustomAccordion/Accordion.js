import { faqs } from "./data";
import AccordionItem from "./AccordionItem";
import './Accordion.css';

const Accordion = () => {
  return (
    <ul className="accordion">
      {faqs.map((data, index) => (
        <AccordionItem key={index} data={data} />
      ))}
    </ul>
  );
};

export default Accordion;
